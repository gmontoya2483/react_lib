import Accordion from "../components/Accordion";



function AccordionPage () {

    const items = [
        {   id: 'asd111',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'asd112',
            label: 'Can I use Javascript on a project?',
            content: 'You can use JavaScript on any project you want.'
        },
        {
            id: 'asd113',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want.'
        }
    ]

    return <Accordion items={items}/>


}

export default AccordionPage
