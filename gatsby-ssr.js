import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
        key="https://code.jquery.com/jquery-3.4.1.min.js"
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossOrigin="anonymous"
        defer
        />,
        <script
        key="https://cdn.jsdelivr.net/npm/shuffle-text@0.3.0/build/shuffle-text.min.js"
        src="https://cdn.jsdelivr.net/npm/shuffle-text@0.3.0/build/shuffle-text.min.js"
        defer
        />,
        <script
        key="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"
        src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js"
        defer
        />,
        <script
        key="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"
        defer
        />,
        <script
        key="https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/js/modaal.min.js"
        src="https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/js/modaal.min.js"
        defer
        />,
        <script
        key="/javascripts/main.js"
        src="/javascripts/main.js"
        defer
        />
    ])
}
