








// Routes
app.post("/join", Admin.join);
app.post("/profile/bg-image", Admin.BgImage);
app.get ("/verify", Admin.verify);
app.post("/admin-data", Admin.getAdminData);
app.post("/send-confirmation", Admin.sendConfirmation);
app.post("/sign-in", Admin.signIn);



//Requires
const dotenv= require('dotenv');
const AdminRoutes = require("./Admin/routes");
const RunningRoutes = require("./running/routes");
const fetch= require('node-fetch');
const APIRoutes= require('./api/routes');


//Imports
import RoomView from './room';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import Link from './link';
import * as InvitationActions from '../../stores/invitations';
import Avatar from '../avatar';
import { uniqueArray } from '../../utils/water_bill';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import ConvoView from './convo';
import classNames from 'classnames';



//Use State 
const [inputText, setInputText] = useState("");
const [uploading, setUploading] = useState(false);
const [mentionedUsers, setMentionedUsers] = useState([]);
const [attachment, setAttachment] = useState(null);



//Variable Definitions
const totalUploadedBytes= "String";
const uploadButton= 17;
const mediaTitleInputRef= <h1>Title</h1>;
const thumbnailToDeleteRef= video;
const deleteMediaItemBtnRef = useRef<any>(null);

//Array
array = [
    [11,2,3,4],
    [x,y,12,5],
    [5,120,10,"Penguin"],
]

//Object
{
"webpack"                         : "^5.10.0" ,
"@types/glob"                     : "^7.1.3"  ,
"webpack-cli"                     : "^4.2.0"  ,
"@types/mocha"                    : "^8.0.4"  ,
"@types/node"                     : "^12.11.7",
"@types/vscode"                   : "^1.51.0" ,
"@typescript-eslint/eslint-plugin": "^4.9.0"  ,
}





