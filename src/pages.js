import BrainPowder from './BrainPowder';
import Staff from './staff';
import Recordings from './recordings';
import Skating from './matadorskating';
import Poll from './mmmPoll';

const pages = [
    {name:"Staff", url:"/Staff", component: Staff},
    {name:"Recordings", url:"/Recordings", component: Recordings},
    {name: "Munch, Marry, Murder", url:'/mmm', component: Poll},
    {name:"Brain Powder", url:'/BrainPowder', component: BrainPowder},
    {name:"Matador Skating", url:"/Skating", component: Skating},
];

export default pages;