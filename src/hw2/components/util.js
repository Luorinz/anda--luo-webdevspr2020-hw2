import React from 'react';

export default class Util extends React.Component {
    checkWord = function (word, key) {
        if (word.length !== key.length) return 0;
        let res = 0;
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === key.charAt(i)) res++;
        }
        return res;
    }

    readFile = function (file_name) {

    }
}