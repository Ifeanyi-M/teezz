import { proxy } from "valtio";

import { newlogo } from "../assets";

const state = proxy({
 intro : true,
 color: '#F907FC',
 isLogoTexture: true,
 isFullTexture: false,
 logoDecal: newlogo,
 fullDecal: './threejs.png'

});

export default state;