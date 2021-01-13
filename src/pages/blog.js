import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          scelerisque purus id justo tempus, sit amet mattis massa gravida. Sed
          in tellus suscipit, scelerisque odio.
        </p>
      </div>
    </Layout>
  )
}

export default blog
