import React, { FC } from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Grid from '@material-ui/core/Grid'

import { formatDate } from '../../utils/global'
import Wrapper from './Wrapper'
import PostTitleWrapper from './PostTitleWrapper'
import PostTitle from './PostTitle'
import PostDate from './PostDate'
import PostThumbnail from './PostThumbnail'
import StatusNew from './StatusNew'
import StatusPopular from './StatusPopular'

interface InterfacePost {
  path: string
  title: string
  date: string
  categories: string[]
}

interface Props {
  post: InterfacePost
  thumbnail: string
  simple?: boolean
}

const PostItem: FC<Props> = props => {
  const { post, thumbnail, simple } = props

  const popular = post.categories.includes('Popular')
  const date = formatDate(post.date)
  const newest = moment(post.date) > moment().subtract(1, 'months')

  return (
    <div>
      <Link to={post.path} key={post.title}>
        <Wrapper simple={simple}>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              {thumbnail ? <PostThumbnail fixed={thumbnail} /> : <div />}
            </Grid>

            <Grid item xs={9}>
              <PostTitleWrapper simple={simple}>
                <PostTitle>{post.title}</PostTitle>
                {!simple && <PostDate>{date}</PostDate>}
              </PostTitleWrapper>
            </Grid>

            <Grid item xs={2}>
              {newest && <StatusNew>New!</StatusNew>}

              {popular && !simple && !newest && <StatusPopular>Popular</StatusPopular>}
            </Grid>
          </Grid>
        </Wrapper>
      </Link>
    </div>
  )
}

export default PostItem
