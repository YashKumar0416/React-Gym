import React from 'react'
import FeatureBox from './FeatureBox'
import push from "../images/push.jpg"
import pull from "../images/pull.jpeg"
import legs from "../images/legs.jpeg"
import arrow from "../images/arrow.jpg"

function Feature() {
  return (
    <div className='features'>
        <h1>FEATURES</h1>
        <div className="a-container">
            <FeatureBox image={push} title="PUSH" />
            <FeatureBox image={pull} title="PULL" />
            <FeatureBox image={legs} title="LEGS" />
            <FeatureBox image={arrow} title="EXPLORE MORE" />
        </div>
    </div>
  )
}

export default Feature