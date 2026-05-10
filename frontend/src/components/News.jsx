import React from 'react'
import { newsStyles, newsCSS } from '../assets/dummyStyles'
import {sampleNews} from '../assets/newdummydata'

const News = () => {
  return (
    <div className={newsStyles.container}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Monoton&family=Roboto:wght@300;400;700&display=swap');`}</style>

        <header className={newsStyles.header}>
            <div className={newsStyles.headerFlex}>
                <div className={newsStyles.logoContainer}>
                    <div className={newsStyles.logoText} style={{
                        fontFamily:"Monoton, cursive"
                    }}>
                        Cinenews

                    </div>
                </div>

            </div>

        </header>

    </div>
  )
}

export default News