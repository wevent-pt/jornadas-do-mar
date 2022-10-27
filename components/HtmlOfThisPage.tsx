import * as React from 'react'
import useSWR from 'swr'

import cs from 'classnames'

import styles from './styles.module.css'

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export const LoadingIcon = () => {
    const config = 'jornadasdomar'
    const slug = window.location.pathname;  
    const { data, error } = useSWR('/'+ window.location.pathname, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        <div style={{ textAlign: 'center' }} dangerouslySetInnerHTML={data.html}>ggggggggg</div>
      </div>
    )
}
