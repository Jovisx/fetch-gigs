/* eslint-disable no-unused-vars */
const { URL } = require('url');
const fetch = require('node-fetch');
const parser = require('xml2json');
const https = require('https');
const models = require('../models');

const saveDescriptionToDB = async(itemArray) => {
  Promise.all(itemArray.map(async (item) => {
    await models.jobcontent.create({
      title: item.title,
      link: item.link,
      description: item.description,
      pubDate: item.pubDate,
      guid: item.guid
    });
  }));

};

class APIService {
  constructor(url) {
    this.endpoint = url;
  }

  async getWithXML(url = '/', data = {}) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/xml',
      },
    };
    try {
      const _url = new URL(url);
      Object.keys(data).forEach((key) => { if (data[key]) _url.searchParams.append(key, data[key]); });

      const fetchRes = await fetch(_url, options)
        .then(res => {
          return res.text();
        }).then(data => {
          const jsonData = parser.toJson(data, { object: true });

          saveDescriptionToDB(jsonData.rss.channel.item);
        }).catch (err => {
          console.log(err.message);
        })

    } catch (err) {
      console.log(err.message);
    }
  }

}

module.exports = {
  APIService
};
