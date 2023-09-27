import React from "react"
import Nav from '../components/common/nav'
import Card from "../components/common/card"

function ComponentsPage () {
    return (
        <div>
            <Nav />
            <main>
                <section>

                </section>
                <section className="flex flex-wrap justify-center w-3/5 ms-auto me-32 mt-24 " >
                    <Card titulo={'Popconfirm'} categoria={'Feedback'} link={'https://ant.design/components/popconfirm'}/>
                    <Card titulo={'Notification'} categoria={'Feedback'} link={'https://ant.design/components/notification'}/>
                    <Card titulo={'Button'} categoria={'Buttons'} link={'https://ant.design/components/button'}/>
                    <Card titulo={'Modal'} categoria={'Feedback'} link={'https://ant.design/components/modal'}/>
                    <Card titulo={'Icon'} categoria={'Images'} link={'https://ant.design/components/icon'}/>
                    <Card titulo={'Float button'} categoria={'Buttons'} link={'https://ant.design/components/float-button'}/>
                    <Card titulo={'Alert'} categoria={'Feedback'} link={'https://ant.design/components/alert'}/>
                    <Card titulo={'Form'} categoria={'Forms'} link={'https://ant.design/components/form'}/>
                </section>
            </main>
        </div>
    )
}

export default ComponentsPage