import BrainPowder from './BrainPowder';
import Staff from './staff';
import Recordings from './recordings';
import Skating from './matadorskating';

const pages = [
    {name:"Staff", url:"/Staff", component: Staff},
    {name:"Recordings", url:"/Recordings", component: Recordings},
    {name:"Brain Powder", url:'/BrainPowder', component: BrainPowder},
    {name:"Matador Skating", url:"/Skating", component: Skating},
];

export default pages;