import models from '../models';
import { sendMail } from '../utils/sendmail';

export default {
	Query: {
		job: async (parent, { id }) => {
			return await models.jobcontent.findByPk(id)
		},
		jobs: async (parent, { offset = 0, limit = 10 }) => {
			return await models.jobcontent.findAll({
        offset,
        limit
      })
		}
	},
	Mutation: {
		deleteJob:  async (parent, { id }) => {
      return await models.jobcontent.destroy({ where: { id }})
    },
    makeFavoriteJob: async (parent, { id }) => {
      const job = await models.jobcontent.findByPk(id);

      if (job) {
        await job.update({
          isFavorite: 1
        });
      }

      await sendMail();
      return job.get();
    }
	},
}