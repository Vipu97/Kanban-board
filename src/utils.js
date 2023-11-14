const Filters = {
    status : [
        {
            icon : '/icons/circle-question-solid.svg',
            name : 'Backlog'
        },
        {
            icon : 'icons/circle-regular.svg',
            name : "Todo"
        },
        {
            icon : 'icons/circle-half-stroke-solid.svg',
            name : 'In progress'
        },
        {
            icon : 'icons/circle-check-solid.svg',
            name : 'Done',
        },
        {
            icon : 'icons/circle-xmark-solid.svg',
            name : 'Cancelled'
        }
    ],
    priority : [
        {
            icon : 'icons/three-dot.svg',
            name : 'No Priority',
            level : 0
        },
        {
            icon : 'icons/exclamation-square-fill.svg',
            name : 'Urgent',
            level : 4
        },
        {
            icon : 'icons/full-signal.svg',
            name : 'High',
            level : 3
        },
        {
            icon : 'icons/medium-signal.svg',
            name : 'Medium',
            level : 2
        },
        {
            icon : 'icons/low-signal.svg',
            name : 'Low',
            level : 1
        }
    ]

}

export default Filters