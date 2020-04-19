import React from 'react';
import { Route } from "react-router-dom";

const KNavRoute = (props) => (
<Route path={props.page.url} component={props.page.component} />
)

export default KNavRoute;