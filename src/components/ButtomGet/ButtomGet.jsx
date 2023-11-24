import React from 'react'
import Icon from './icon'
import './buttom.css'

import { FormattedMessage } from 'react-intl';

export const ButtomGet = () => {
    return (
        <button className="cssbuttons-io-button">  
            <FormattedMessage
                id='btn-know-more'
                defaultMessage='続きを読む'
            />
            <div className="icon">
                <Icon/>
            </div>
        </button>
    )
}
