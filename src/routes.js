import React from 'react';
import { Router } from "@reach/router";

import Image from './Components/Image';
import Contact from './Components/Contact';
import Ubication from './Components/Ubication';

const Routes = () => <Router><Image path="/" /><Contact path="/contacto" /><Ubication path="/ubicacion"/></Router>;

export default Routes;