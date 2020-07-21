import config from '../config';
import { APIService } from './apiService';

const APIModule = new APIService();

exports.callApiTimerFunc = async(time) => {
  const params = {
    q: config.rss.query,
    sort: config.rss.sort,
    paging: config.rss.paging,
    api_params: config.rss.api_params,
    securityToken: config.rss.security_token,
    userUid: config.rss.user_uid,
    orgUid: config.rss.org_uid
  };

  APIModule.getWithXML(config.rss.url, params);
}