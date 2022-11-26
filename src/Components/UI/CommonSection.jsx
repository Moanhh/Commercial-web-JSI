import React from 'react'
import '../../styles/CommonSection.css'


function CommonSection({item}) {
  return (
    <>
        <section className="common_section">
            <Container>
                <h1>{title}</h1>
            </Container>
        </section>
    </>
  )
}

export default CommonSection