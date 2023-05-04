import React from 'react';
import DoublePendulum from 'DoublePendulum.js';




export class ModifiablePendulum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            g: 0.02,
            m1: 0.1,
            m2: 0.1,
            l1: 10,
            l2: 10,

    }
}

