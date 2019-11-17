import moment from 'moment'

import config from '../../data/SiteConfig'

export const formatDate = (date: string) => moment.utc(date).format(config.dateFormat)
