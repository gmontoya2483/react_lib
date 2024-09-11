import Link from './Link';


function SideBar() {

    const links = [
        {label: 'Dropdown', path: '/dropdown'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
        {label: 'Modal', path: '/modal'}
    ]

    const renderedLinks= links.map((link, index) => {
        return (
        <Link
            key={link.label}
            to={link.path}
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.label}
        </Link>)
    });

    return (
        <div className="sticky top-0 overflow-y-auto flex flex-col gap-3 items-start">
            {renderedLinks}
        </div>
    )

}

export default SideBar;
