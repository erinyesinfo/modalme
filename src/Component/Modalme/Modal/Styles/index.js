import React from 'react';

const Styles = ({ modalName }) => {
    if (modalName === 'Bottom') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
              }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
              }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }
              #modal-container.modalme {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 5;
              }
              #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
              }
              #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme .modal-background .modal {
                opacity: 0;
                -moz-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme + .content {
                -moz-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out {
                -moz-animation: quickScaleDown 0s .5s linear forwards;
                -webkit-animation: quickScaleDown 0s .5s linear forwards;
                -o-animation: quickScaleDown 0s .5s linear forwards;
                animation: quickScaleDown 0s .5s linear forwards;
              }
              #modal-container.modalme.out .modal-background {
                -moz-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out .modal-background .modal {
                -moz-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out + .content {
                -moz-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
              }
              #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
              }
              #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
              }
              #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
              }
              
              
              /* Keyframes */
              @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
              }
              @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
              }
              @-webkit-keyframes fadeOut /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
              }
              @keyframes fadeOut {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
              }
              @-webkit-keyframes scaleUp /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0;
                } 100% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
              }
              @keyframes scaleUp {
                0% {
                -moz-transform: scale(0.8) translateY(1000px);
                -ms-transform: scale(0.8) translateY(1000px);
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0;
                } 100% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
              }
              @-webkit-keyframes scaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -webkit-transform: scale(0.8) translateY(-1000px);
                -o-transform: scale(0.8) translateY(-1000px);
                transform: scale(0.8) translateY(-1000px);
                opacity: 0; }
              }
              @keyframes scaleDown {
                0% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -moz-transform: scale(0.8) translateY(-1000px);
                -ms-transform: scale(0.8) translateY(-1000px);
                -webkit-transform: scale(0.8) translateY(-1000px);
                -o-transform: scale(0.8) translateY(-1000px);
                transform: scale(0.8) translateY(-1000px);
                opacity: 0; }
              }
              @-webkit-keyframes scaleBack /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
              }
              @keyframes scaleBack {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
              }
              @-webkit-keyframes scaleForward /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @keyframes scaleForward {
                0% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @-webkit-keyframes quickScaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
              @keyframes quickScaleDown {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
            `}</style>
        );
    } else if (modalName === 'Left') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
            }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
            }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }
            #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 5;
            }
            #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal {
                -moz-transform: translateX(1500px);
                -ms-transform: translateX(1500px);
                -webkit-transform: translateX(1500px);
                -o-transform: translateX(1500px);
                transform: translateX(1500px);
                -moz-animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out {
                -moz-animation: quickScaleDown 0s .5s linear forwards;
                -webkit-animation: quickScaleDown 0s .5s linear forwards;
                -o-animation: quickScaleDown 0s .5s linear forwards;
                animation: quickScaleDown 0s .5s linear forwards;
            }
            #modal-container.modalme.out .modal-background {
                -moz-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal {
                -moz-animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal h2, #modal-container.modalme.out .modal-background .modal p {
                -moz-animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal .modal-svg rect {
                -moz-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
              
            .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
            }
            .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
            }
            .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
            }
            .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
            }
            
            
            /* Keyframes */
            @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @-webkit-keyframes fadeOut /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @keyframes fadeOut {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @-webkit-keyframes quickScaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
            }
            @keyframes quickScaleDown {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                }
            }
            @-webkit-keyframes roadRunnerInRight /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                } 70% {
                -webkit-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -o-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                transform: translateX(30px) skewX(0deg) scaleX(0.9);
                } 100% {
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1); }
            }
            @keyframes roadRunnerInRight {
                0% {
                -moz-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -ms-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -webkit-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                } 70% {
                -moz-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -ms-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -webkit-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -o-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                transform: translateX(30px) skewX(0deg) scaleX(0.9);
                } 100% {
                -moz-transform: translateX(0px) skewX(0deg) scaleX(1);
                -ms-transform: translateX(0px) skewX(0deg) scaleX(1);
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1);
                }
            }
            @-webkit-keyframes roadRunnerOut /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1);
                } 30% {
                -webkit-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -o-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                } 100% {
                -webkit-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(1500px) skewX(30deg) scaleX(1.3); }
            }
            @keyframes roadRunnerOut {
                0% {
                -moz-transform: translateX(0px) skewX(0deg) scaleX(1);
                -ms-transform: translateX(0px) skewX(0deg) scaleX(1);
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1);
                } 30% {
                -moz-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -ms-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -webkit-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -o-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                } 100% {
                -moz-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -ms-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -webkit-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                }
            }
            @-webkit-keyframes sketchOut /* Safari and Chrome */ {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 778; }
            }
            @keyframes sketchOut {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 778; }
            }
            @-webkit-keyframes modalContentFadeOut /* Safari and Chrome */ {
                0% {opacity: 1;top: 0px; }
                100% { opacity: 0;top: -20px; }
            }
            @keyframes modalContentFadeOut {
                0% {opacity: 1;top: 0px; }
                100% { opacity: 0;top: -20px; }
            }
            `}</style>
        );
    } else if (modalName === 'Top') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
            }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
            }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }
            #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 5;
            }
            #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal {
                opacity: 0;
                -moz-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme + .content {
                -moz-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out {
                -moz-animation: quickScaleDown 0s .3s linear forwards;
                -webkit-animation: quickScaleDown 0s .3s linear forwards;
                -o-animation: quickScaleDown 0s .3s linear forwards;
                animation: quickScaleDown 0s .3s linear forwards;
            }
            #modal-container.modalme.out .modal-background {
                -moz-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal {
                -moz-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out + .content {
                -moz-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
            }
            #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
            }
            #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
            }
            #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
            }
            
            
            /* Keyframes */
            @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @-webkit-keyframes fadeOut /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @keyframes fadeOut {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @-webkit-keyframes scaleUp /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.8) translateY(-1000px);
                -o-transform: scale(0.8) translateY(-1000px);
                transform: scale(0.8) translateY(-1000px);
                opacity: 0;
                } 100% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
            }
            @keyframes scaleUp {
                0% {
                -moz-transform: scale(0.8) translateY(-1000px);
                -ms-transform: scale(0.8) translateY(-1000px);
                -webkit-transform: scale(0.8) translateY(-1000px);
                -o-transform: scale(0.8) translateY(-1000px);
                transform: scale(0.8) translateY(-1000px);
                opacity: 0;
                } 100% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
            }
            @-webkit-keyframes scaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0; }
            }
            @keyframes scaleDown {
                0% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -moz-transform: scale(0.8) translateY(1000px);
                -ms-transform: scale(0.8) translateY(1000px);
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0; }
            }
            @-webkit-keyframes scaleBack /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
            }
            @keyframes scaleBack {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
            }
            @-webkit-keyframes scaleForward /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
            }
            @keyframes scaleForward {
                0% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
            }
            @-webkit-keyframes quickScaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
            }
            @keyframes quickScaleDown {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
            }
            `}</style>
        );
    } else if (modalName === 'Right') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
            }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
            }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }
            #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 5;
            }
            #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal {
                -moz-transform: translateX(-1500px);
                -ms-transform: translateX(-1500px);
                -webkit-transform: translateX(-1500px);
                -o-transform: translateX(-1500px);
                transform: translateX(-1500px);
                -moz-animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: roadRunnerInRight 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out {
                -moz-animation: quickScaleDown 0s .5s linear forwards;
                -webkit-animation: quickScaleDown 0s .5s linear forwards;
                -o-animation: quickScaleDown 0s .5s linear forwards;
                animation: quickScaleDown 0s .5s linear forwards;
            }
            #modal-container.modalme.out .modal-background {
                -moz-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal {
                -moz-animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: roadRunnerOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal h2, #modal-container.modalme.out .modal-background .modal p {
                -moz-animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal .modal-svg rect {
                -moz-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
              
            .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
            }
            .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
            }
            .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
            }
            .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
            }
            
            
            /* Keyframes */
            @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @-webkit-keyframes fadeOut /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @keyframes fadeOut {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @-webkit-keyframes quickScaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
            }
            @keyframes quickScaleDown {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
            }
            @-webkit-keyframes roadRunnerInRight /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                } 70% {
                -webkit-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -o-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                transform: translateX(30px) skewX(0deg) scaleX(0.9);
                } 100% {
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1); }
            }
            @keyframes roadRunnerInRight {
                0% {
                -moz-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -ms-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -webkit-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(1500px) skewX(30deg) scaleX(1.3);
                } 70% {
                -moz-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -ms-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -webkit-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                -o-transform: translateX(30px) skewX(0deg) scaleX(0.9);
                transform: translateX(30px) skewX(0deg) scaleX(0.9);
                } 100% {
                -moz-transform: translateX(0px) skewX(0deg) scaleX(1);
                -ms-transform: translateX(0px) skewX(0deg) scaleX(1);
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1); }
            }
            @-webkit-keyframes roadRunnerOut /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1);
                } 30% {
                -webkit-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -o-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                } 100% {
                -webkit-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(-1500px) skewX(30deg) scaleX(1.3); }
            }
            @keyframes roadRunnerOut {
                0% {
                -moz-transform: translateX(0px) skewX(0deg) scaleX(1);
                -ms-transform: translateX(0px) skewX(0deg) scaleX(1);
                -webkit-transform: translateX(0px) skewX(0deg) scaleX(1);
                -o-transform: translateX(0px) skewX(0deg) scaleX(1);
                transform: translateX(0px) skewX(0deg) scaleX(1);
                } 30% {
                -moz-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -ms-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -webkit-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                -o-transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
                } 100% {
                -moz-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -ms-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -webkit-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                -o-transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
                transform: translateX(-1500px) skewX(30deg) scaleX(1.3); }
            }
            @-webkit-keyframes sketchOut /* Safari and Chrome */ {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 778; }
            }
            @keyframes sketchOut {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 778; }
            }
            @-webkit-keyframes modalContentFadeOut /* Safari and Chrome */ {
                0% { opacity: 1;top: 0px; }
                100% { opacity: 0;top: -20px; }
            }
            @keyframes modalContentFadeOut {
                0% { opacity: 1;top: 0px; }
                100% { opacity: 0;top: -20px; }
            }
            `}</style>
        );
    } else if (modalName === 'Unfolding') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
              }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
              }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }
              #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 1;
              }
              #modal-container.modalme {
                -moz-transform: scaleY(0.01) scaleX(0);
                -ms-transform: scaleY(0.01) scaleX(0);
                -webkit-transform: scaleY(0.01) scaleX(0);
                -o-transform: scaleY(0.01) scaleX(0);
                transform: scaleY(0.01) scaleX(0);
                -moz-animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme .modal-background .modal {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                -moz-animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                -moz-animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out .modal-background .modal {
                -moz-animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
              }
              #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
              }
              #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
              }
              #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
              }
              
              
              /* Keyframes */
              @-webkit-keyframes unfoldIn /* Safari and Chrome */ {
                0% {
                -webkit-transform: scaleY(0.005) scaleX(0);
                -o-transform: scaleY(0.005) scaleX(0);
                transform: scaleY(0.005) scaleX(0);
                } 50% {
                -webkit-transform: scaleY(0.005) scaleX(1);
                -o-transform: scaleY(0.005) scaleX(1);
                transform: scaleY(0.005) scaleX(1);
                } 100% {
                -webkit-transform: scaleY(1) scaleX(1);
                -o-transform: scaleY(1) scaleX(1);
                transform: scaleY(1) scaleX(1); }
              }
              @keyframes unfoldIn {
                0% {
                -moz-transform: scaleY(0.005) scaleX(0);
                -ms-transform: scaleY(0.005) scaleX(0);
                -webkit-transform: scaleY(0.005) scaleX(0);
                -o-transform: scaleY(0.005) scaleX(0);
                transform: scaleY(0.005) scaleX(0);
                } 50% {
                -moz-transform: scaleY(0.005) scaleX(1);
                -ms-transform: scaleY(0.005) scaleX(1);
                -webkit-transform: scaleY(0.005) scaleX(1);
                -o-transform: scaleY(0.005) scaleX(1);
                transform: scaleY(0.005) scaleX(1);
                } 100% {
                -moz-transform: scaleY(1) scaleX(1);
                -ms-transform: scaleY(1) scaleX(1);
                -webkit-transform: scaleY(1) scaleX(1);
                -o-transform: scaleY(1) scaleX(1);
                transform: scaleY(1) scaleX(1); }
              }
              @-webkit-keyframes unfoldOut /* Safari and Chrome */ {
                0% {
                -webkit-transform: scaleY(1) scaleX(1);
                -o-transform: scaleY(1) scaleX(1);
                transform: scaleY(1) scaleX(1);
                } 50% {
                -webkit-transform: scaleY(0.005) scaleX(1);
                -o-transform: scaleY(0.005) scaleX(1);
                transform: scaleY(0.005) scaleX(1);
                } 100% {
                -webkit-transform: scaleY(0.005) scaleX(0);
                -o-transform: scaleY(0.005) scaleX(0);
                transform: scaleY(0.005) scaleX(0); }
              }
              @keyframes unfoldOut {
                0% {
                -moz-transform: scaleY(1) scaleX(1);
                -ms-transform: scaleY(1) scaleX(1);
                -webkit-transform: scaleY(1) scaleX(1);
                -o-transform: scaleY(1) scaleX(1);
                transform: scaleY(1) scaleX(1);
                } 50% {
                -moz-transform: scaleY(0.005) scaleX(1);
                -ms-transform: scaleY(0.005) scaleX(1);
                -webkit-transform: scaleY(0.005) scaleX(1);
                -o-transform: scaleY(0.005) scaleX(1);
                transform: scaleY(0.005) scaleX(1);
                } 100% {
                -moz-transform: scaleY(0.005) scaleX(0);
                -ms-transform: scaleY(0.005) scaleX(0);
                -webkit-transform: scaleY(0.005) scaleX(0);
                -o-transform: scaleY(0.005) scaleX(0);
                transform: scaleY(0.005) scaleX(0); }
              }
              @-webkit-keyframes zoomIn /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                } 100% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @keyframes zoomIn {
                0% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                } 100% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @-webkit-keyframes zoomOut /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
              @keyframes zoomOut {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
            `}</style>
        );
    } else if (modalName === 'Revealing') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
              }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
              }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }
              .modalme-content {
                min-height: 100vh;
                height: 100vh;
                background: white;
                position: relative;
                z-index: 0;
              }.modalme-content.active {
                -moz-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }.modalme-content.desactive {
                -moz-animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 1;
              }
              #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
              }
              #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme .modal-background .modal {
                opacity: 0;
                -moz-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme + .content {
                -moz-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out {
                -moz-animation: quickScaleDown 0s .5s linear forwards;
                -webkit-animation: quickScaleDown 0s .5s linear forwards;
                -o-animation: quickScaleDown 0s .5s linear forwards;
                animation: quickScaleDown 0s .5s linear forwards;
              }
              #modal-container.modalme.out .modal-background {
                -moz-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out .modal-background .modal {
                -moz-animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out + .content {
                -moz-animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
              }
              #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
              }
              #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
              }
              #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
              }
              
              
              /* Keyframes */
              @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
              }
              @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
              }
              @-webkit-keyframes fadeOut /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
              }
              @keyframes fadeOut {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
              }
              @-webkit-keyframes scaleUp /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0;
                } 100% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
              }
              @keyframes scaleUp {
                0% {
                -moz-transform: scale(0.8) translateY(1000px);
                -ms-transform: scale(0.8) translateY(1000px);
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0;
                } 100% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
              }
              @-webkit-keyframes scaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0; }
              }
              @keyframes scaleDown {
                0% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -moz-transform: scale(0.8) translateY(1000px);
                -ms-transform: scale(0.8) translateY(1000px);
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0; }
              }
              @-webkit-keyframes scaleBack /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
              }
              @keyframes scaleBack {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
              }
              @-webkit-keyframes scaleForward /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @keyframes scaleForward {
                0% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @-webkit-keyframes quickScaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
              @keyframes quickScaleDown {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
            `}</style>
        );
    } else if (modalName === 'Uncovering') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
            }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
            }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modalme-content {
                min-height: 100vh;
                height: 100vh;
                background: white;
                position: relative;
                z-index: 0;
            }.modalme-content.active {
                -moz-animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }.modalme-content.desactive {
                -moz-animation: slideDownLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: slideDownLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: slideDownLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: slideDownLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 1;
            }
            #modal-container.modalme {
                z-index: 0;
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0.6);
            }
            #modal-container.modalme .modal-background .modal {
                -moz-animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme + .content {
                z-index: 1;
                -moz-animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal {
                -moz-animation: moveDown 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: moveDown 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: moveDown 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: moveDown 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out + .content {
                -moz-animation: slideDownLarge 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: slideDownLarge 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: slideDownLarge 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: slideDownLarge 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
            }
            #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
            }
            #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
            }
            #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
            }
            
            
            /* Keyframes */
            @-webkit-keyframes slideUpLarge /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateY(0%);
                -o-transform: translateY(0%);
                transform: translateY(0%);
                } 100% {
                -webkit-transform: translateY(-100%);
                -o-transform: translateY(-100%);
                transform: translateY(-100%); }
            }
            @keyframes slideUpLarge {
                0% {
                -moz-transform: translateY(0%);
                -ms-transform: translateY(0%);
                -webkit-transform: translateY(0%);
                -o-transform: translateY(0%);
                transform: translateY(0%);
                } 100% {
                -moz-transform: translateY(-100%);
                -ms-transform: translateY(-100%);
                -webkit-transform: translateY(-100%);
                -o-transform: translateY(-100%);
                transform: translateY(-100%); }
            }
            @-webkit-keyframes slideDownLarge /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateY(-100%);
                -o-transform: translateY(-100%);
                transform: translateY(-100%);
                } 100% {
                -webkit-transform: translateY(0%);
                -o-transform: translateY(0%);
                transform: translateY(0%); }
            }
            @keyframes slideDownLarge {
                0% {
                -moz-transform: translateY(-100%);
                -ms-transform: translateY(-100%);
                -webkit-transform: translateY(-100%);
                -o-transform: translateY(-100%);
                transform: translateY(-100%);
                } 100% {
                -moz-transform: translateY(0%);
                -ms-transform: translateY(0%);
                -webkit-transform: translateY(0%);
                -o-transform: translateY(0%);
                transform: translateY(0%); }
            }
            @-webkit-keyframes moveUp /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateY(150px);
                -o-transform: translateY(150px);
                transform: translateY(150px);
                } 100% {
                -webkit-transform: translateY(0);
                -o-transform: translateY(0);
                transform: translateY(0); }
            }
            @keyframes moveUp {
                0% {
                -moz-transform: translateY(150px);
                -ms-transform: translateY(150px);
                -webkit-transform: translateY(150px);
                -o-transform: translateY(150px);
                transform: translateY(150px);
                } 100% {
                -moz-transform: translateY(0);
                -ms-transform: translateY(0);
                -webkit-transform: translateY(0);
                -o-transform: translateY(0);
                transform: translateY(0); }
            }
            @-webkit-keyframes moveDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateY(0);
                -o-transform: translateY(0);
                transform: translateY(0);
                } 100% {
                -webkit-transform: translateY(400px);
                -o-transform: translateY(400px);
                transform: translateY(400px); }
            }
            @keyframes moveDown {
                0% {
                -moz-transform: translateY(0);
                -ms-transform: translateY(0);
                -webkit-transform: translateY(0);
                -o-transform: translateY(0);
                transform: translateY(0);
                } 100% {
                -moz-transform: translateY(400px);
                -ms-transform: translateY(400px);
                -webkit-transform: translateY(400px);
                -o-transform: translateY(400px);
                transform: translateY(400px); }
            }
            `}</style>
        );
    } else if (modalName === 'BlowUp') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
            }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
            }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }
            .modalme-content {
                min-height: 100vh;
                height: 100vh;
                background: white;
                position: relative;
                z-index: 0;
            }.modalme-content.active {
                -moz-animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }.modalme-content.desactive {
                -moz-animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 1;
            }
            #modal-container.modalme {
                z-index: 0;
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0.7);
            }
            #modal-container.modalme .modal-background .modal {
                -moz-animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme + .content {
                z-index: 1;
                -moz-animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal {
                -moz-animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out + .content {
                -moz-animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
            }
            #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
            }
            #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
            }
            #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
            }
            
            @-webkit-keyframes blowUpContent /* Safari and Chrome */ {
                0% {
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                    opacity: 1;
                } 99.9% {
                    -webkit-transform: scale(2);
                    -o-transform: scale(2);
                    transform: scale(2);
                    opacity: 0;
                } 100% {
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0); }
            }
            @keyframes blowUpContent {
                0% {
                    -moz-transform: scale(1);
                    -ms-transform: scale(1);
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                    opacity: 1;
                } 99.9% {
                    -moz-transform: scale(2);
                    -ms-transform: scale(2);
                    -webkit-transform: scale(2);
                    -o-transform: scale(2);
                    transform: scale(2);
                    opacity: 0;
                } 100% {
                    -moz-transform: scale(0);
                    -ms-transform: scale(0);
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0); }
            }
            @-webkit-keyframes blowUpContentTwo /* Safari and Chrome */ {
                0% {
                    -webkit-transform: scale(2);
                    -o-transform: scale(2);
                    transform: scale(2);
                    opacity: 0;
                } 100% {
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                    opacity: 1; }
            }
            @keyframes blowUpContentTwo {
                0% {
                    -moz-transform: scale(2);
                    -ms-transform: scale(2);
                    -webkit-transform: scale(2);
                    -o-transform: scale(2);
                    transform: scale(2);
                    opacity: 0;
                } 100% {
                    -moz-transform: scale(1);
                    -ms-transform: scale(1);
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                    opacity: 1; }
            }
            @-webkit-keyframes blowUpModal /* Safari and Chrome */ {
                0% {
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0);
                } 100% {
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                }
            }
            @keyframes blowUpModal {
                0% {
                    -moz-transform: scale(0);
                    -ms-transform: scale(0);
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0);
                } 100% {
                    -moz-transform: scale(1);
                    -ms-transform: scale(1);
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                }
            }
            @-webkit-keyframes blowUpModalTwo /* Safari and Chrome */ {
                0% {
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                    opacity: 1;
                } 100% {
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0);
                    opacity: 0; }
            }
            @keyframes blowUpModalTwo {
                0% {
                    -moz-transform: scale(1);
                    -ms-transform: scale(1);
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                    opacity: 1;
                } 100% {
                    -moz-transform: scale(0);
                    -ms-transform: scale(0);
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0);
                    opacity: 0; }
            }
            `}</style>
        );
    } else if (modalName === 'Sketch') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: transparent;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
                width: 100px;
                -moz-animation: contentFadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: contentFadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: contentFadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: contentFadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            .modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
            }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
            }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
                -moz-animation: modalmeFade 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalmeFade 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalmeFade 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalmeFade 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 1;
            }
            #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal {
                background-color: transparent;
                -moz-animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal h2, #modal-container.modalme .modal-background .modal p {
                opacity: 0;
                position: relative;
                -moz-animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal .modal-svg rect {
                -moz-animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out {
                -moz-animation: quickScaleDown 0s .8s linear forwards;
                -webkit-animation: quickScaleDown 0s .8s linear forwards;
                -o-animation: quickScaleDown 0s .8s linear forwards;
                animation: quickScaleDown 0s .8s linear forwards;
            }
            #modal-container.modalme.out .modal-background {
                -moz-animation: fadeOut 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeOut 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeOut 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeOut 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal h2, #modal-container.modalme.out .modal-background .modal p {
                -moz-animation: modalContentFadeOut 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalContentFadeOut 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalContentFadeOut 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalContentFadeOut 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal button {
                -moz-animation: modalContentFadeOut 0.1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalContentFadeOut 0.1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalContentFadeOut 0.1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalContentFadeOut 0.1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal .modal-svg rect {
                -moz-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
            }
            #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
            }
            #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
            }
            #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
            }
            #modal-container .modal-background .modal .modal-svg {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                border-radius: 3px;
            }
            #modal-container .modal-background .modal .modal-svg rect {
                stroke: #fff;
                stroke-width: 2px;
                stroke-dasharray: 778;
                stroke-dashoffset: 778;
            }
            
            @media screen and (max-width: 576px) {
                .custom-content { width: 200px; }
            }
            
            @-webkit-keyframes modalmeFade /* Safari and Chrome */ {
                0% { opacity: 0;width: 0; }
                50% { opacity: 0;width: 0; }
                51% { opacity: .5;width: auto; }
                100% { opacity: 1;width: auto; }
            }
            @keyframes modalmeFade {
                0% { opacity: 0;width: 0; }
                50% { opacity: 0;width: 0; }
                51% { opacity: .5;width: auto; }
                100% { opacity: 1;width: auto; }
            }
            @-webkit-keyframes contentFadeIn /* Safari and Chrome */ {
                0% { width: 100px; }
                99% { width: 100px; }
                100% { width: auto; }
            }
            @keyframes contentFadeIn {
                0% { width: 100px; }
                99% { width: 100px; }
                100% { width: auto; }
            }
            @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @-webkit-keyframes fadeOut /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @keyframes fadeOut {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
            }
            @-webkit-keyframes quickScaleDown /* Safari and Chrome */ {
                0% {
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                } 99.9% {
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                } 100% {
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0); }
            }
            @keyframes quickScaleDown {
                0% {
                    -moz-transform: scale(1);
                    -ms-transform: scale(1);
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                } 99.9% {
                    -moz-transform: scale(1);
                    -ms-transform: scale(1);
                    -webkit-transform: scale(1);
                    -o-transform: scale(1);
                    transform: scale(1);
                } 100% {
                    -moz-transform: scale(0);
                    -ms-transform: scale(0);
                    -webkit-transform: scale(0);
                    -o-transform: scale(0);
                    transform: scale(0); }
            }
            @-webkit-keyframes sketchIn /* Safari and Chrome */ {
                0% { stroke-dashoffset: 778; }
                100% { stroke-dashoffset: 0; }
            }
            @keyframes sketchIn {
                0% { stroke-dashoffset: 778; }
                100% { stroke-dashoffset: 0; }
            }
            @-webkit-keyframes sketchOut /* Safari and Chrome */ {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 778; }
            }
            @keyframes sketchOut {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 778; }
            }
            @-webkit-keyframes modalFadeIn /* Safari and Chrome */ {
                0% { background-color: transparent; }
                100% { background-color: white; }
            }
            @keyframes modalFadeIn {
                0% { background-color: transparent; }
                100% { background-color: white; }
            }
            @-webkit-keyframes modalContentFadeIn /* Safari and Chrome */ {
                0% { opacity: 0;top: -20px;}
                100% { opacity: 1;top: 0;}
            }
            @keyframes modalContentFadeIn {
                0% { opacity: 0;top: -20px;}
                100% { opacity: 1;top: 0;}
            }
            @-webkit-keyframes modalContentFadeOut /* Safari and Chrome */ {
                0% { opacity: 1;top: 0px; }
                100% { opacity: 0;top: -20px; }
            }
            @keyframes modalContentFadeOut {
                0% { opacity: 1;top: 0px; }
                100% { opacity: 0;top: -20px; }
            }
            `}</style>
        );
    } else if (modalName === 'Bond') {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
            }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
            }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
            }.modal-custom-btn-close {
                opacity: 0;
                -moz-animation: closeButtonFadeIn 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: closeButtonFadeIn 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: closeButtonFadeIn 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: closeButtonFadeIn 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 1;
            }
            #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
            }
            #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal {
                height: 75px;
                width: 75px;
                border-radius: 75px;
                overflow: hidden;
                -moz-animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme .modal-background .modal h2,
            #modal-container.modalme .modal-background .modal p {
                opacity: 0;
                position: relative;
                -moz-animation: modalContentFadeIn .5s 1.4s linear forwards;
                -webkit-animation: modalContentFadeIn .5s 1.4s linear forwards;
                -o-animation: modalContentFadeIn .5s 1.4s linear forwards;
                animation: modalContentFadeIn .5s 1.4s linear forwards;
            }
            #modal-container.modalme.out {
                -moz-animation: slowFade .5s 1.5s linear forwards;
                -webkit-animation: slowFade .5s 1.5s linear forwards;
                -o-animation: slowFade .5s 1.5s linear forwards;
                animation: slowFade .5s 1.5s linear forwards;
            }
            #modal-container.modalme.out .modal-background {
                background-color: rgba(0, 0, 0, 0.7);
                -moz-animation: fadeToRed 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeToRed 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeToRed 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeToRed 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal {
                border-radius: 3px;
                height: 162px;
                width: 227px;
                -moz-animation: killShot 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: killShot 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: killShot 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: killShot 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container.modalme.out .modal-background .modal h2,
            #modal-container.modalme.out .modal-background .modal p {
                -moz-animation: modalContentFadeOut 0.5s 0.5 cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: modalContentFadeOut 0.5s 0.5 cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: modalContentFadeOut 0.5s 0.5 cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: modalContentFadeOut 0.5s 0.5 cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
            }
            #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
            }
            #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
            }
            #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
            }
            
            @-webkit-keyframes closeButtonFadeIn /* Safari and Chrome */ {
                0% { opacity: 0; }
                99% { opacity: 0; }
                100% { opacity: 1; }
            }
            @keyframes closeButtonFadeIn {
                0% { opacity: 0; }
                99% { opacity: 0; }
                100% { opacity: 1; }
            }
            @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
            }
            @-webkit-keyframes modalContentFadeIn /* Safari and Chrome */ {
                0% { opacity: 0;top: -20px; }
                100% { opacity: 1;top: 0; }
            }
            @keyframes modalContentFadeIn {
                0% { opacity: 0;top: -20px; }
                100% { opacity: 1;top: 0; }
            }
            @-webkit-keyframes modalContentFadeOut /* Safari and Chrome */ {
                0% { opacity: 1;top: 0px; }
                100% { opacity: 0;top: -20px; }
            }
            @keyframes modalContentFadeOut {
                0% { opacity: 1;top: 0px;}
                100% { opacity: 0;top: -20px; }
            }
            @-webkit-keyframes bondJamesBond /* Safari and Chrome */ {
                0% {
                -webkit-transform: translateX(1000px);
                -o-transform: translateX(1000px);
                transform: translateX(1000px);
                } 80% {
                -webkit-transform: translateX(0px);
                -o-transform: translateX(0px);
                transform: translateX(0px);
                border-radius: 75px;
                height: 75px;
                width: 75px;
                } 90% {
                border-radius: 3px;
                height: 182px;
                width: 247px;
                } 100% {
                border-radius: 3px;
                height: auto;
                width: auto; }
            }
            @keyframes bondJamesBond {
                0% {
                -moz-transform: translateX(1000px);
                -ms-transform: translateX(1000px);
                -webkit-transform: translateX(1000px);
                -o-transform: translateX(1000px);
                transform: translateX(1000px);
                } 80% {
                -moz-transform: translateX(0px);
                -ms-transform: translateX(0px);
                -webkit-transform: translateX(0px);
                -o-transform: translateX(0px);
                transform: translateX(0px);
                border-radius: 75px;
                height: 75px;
                width: 75px;
                } 90% {
                border-radius: 3px;
                height: 182px;
                width: 247px;
                } 100% {
                border-radius: 3px;
                height: auto;
                width: auto; }
            }
            @-webkit-keyframes killShot /* Safari and Chrome */ {
                0% {
                opacity: 1;
                -webkit-transform: translateY(0) rotate(0deg);
                -o-transform: translateY(0) rotate(0deg);
                transform: translateY(0) rotate(0deg);
                } 100% {
                opacity: 0;
                -webkit-transform: translateY(300px) rotate(45deg);
                -o-transform: translateY(300px) rotate(45deg);
                transform: translateY(300px) rotate(45deg); }
            }
            @keyframes killShot {
                0% {
                opacity: 1;
                -moz-transform: translateY(0) rotate(0deg);
                -ms-transform: translateY(0) rotate(0deg);
                -webkit-transform: translateY(0) rotate(0deg);
                -o-transform: translateY(0) rotate(0deg);
                transform: translateY(0) rotate(0deg);
                } 100% {
                opacity: 0;
                -moz-transform: translateY(300px) rotate(45deg);
                -ms-transform: translateY(300px) rotate(45deg);
                -webkit-transform: translateY(300px) rotate(45deg);
                -o-transform: translateY(300px) rotate(45deg);
                transform: translateY(300px) rotate(45deg); }
            }
            @-webkit-keyframes fadeToRed /* Safari and Chrome */ {
                0% { background-color: rgba(0, 0, 0, 0.6); }
                100% { background-color: rgba(255, 0, 0, 0.8); }
            }
            @keyframes fadeToRed {
                0% { background-color: rgba(0, 0, 0, 0.6); }
                100% { background-color: rgba(255, 0, 0, 0.8); }
            }
            @-webkit-keyframes slowFade /* Safari and Chrome */ {
                0% { opacity: 1;
                } 99.9% {
                opacity: 0;
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
            }
            @keyframes slowFade {
                0% { opacity: 1;
                } 99.9% {
                opacity: 0;
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
            }            
            `}</style>
        );
    } else {
        return (
            <style>{`
            .modal-custom-content {
                color: #000;
                background-color: #fff;
                justify-content: center;
                display: inline-flex;
                -moz-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }.modal-custom-content .custom-content .content-svg {
                display: flex;
                justify-content: center;
              }.modal-custom-content .custom-content .content-svg .a-svg {
                width: 200px;
              }.modal-custom-content svg, .modal-custom-content img {
                -moz-transition: all .2s ease-in-out;
                -ms-transition: all .2s ease-in-out;
                -webkit-transition: all .2s ease-in-out;
                -o-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out;
              }
              #modal-container.modalme {
                position: fixed;
                display: table;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0);
                z-index: 5;
              }
              #modal-container.modalme {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
              }
              #modal-container.modalme .modal-background {
                background: rgba(0, 0, 0, 0);
                -moz-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme .modal-background .modal {
                opacity: 0;
                -moz-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme + .content {
                -moz-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out {
                -moz-animation: quickScaleDown 0s .5s linear forwards;
                -webkit-animation: quickScaleDown 0s .5s linear forwards;
                -o-animation: quickScaleDown 0s .5s linear forwards;
                animation: quickScaleDown 0s .5s linear forwards;
              }
              #modal-container.modalme.out .modal-background {
                -moz-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: fadeOut 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out .modal-background .modal {
                -moz-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleDown 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container.modalme.out + .content {
                -moz-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -webkit-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                -o-animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                animation: scaleForward 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
              }
              #modal-container .modal-background {
                display: table-cell;
                background: rgba(0, 0, 0, 0.8);
                text-align: center;
                vertical-align: middle;
              }
              #modal-container .modal-background .modal {
                background: white;
                padding: 50px;
                display: inline-block;
                border-radius: 3px;
                font-weight: 300;
                position: relative;
              }
              #modal-container .modal-background .modal h2 {
                font-size: 25px;
                line-height: 25px;
                margin-bottom: 15px;
              }
              #modal-container .modal-background .modal p {
                font-size: 18px;
                line-height: 22px;
              }
              
              
              /* Keyframes */
              @-webkit-keyframes fadeIn /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
              }
              @keyframes fadeIn {
                0% { background: rgba(0, 0, 0, 0); }
                100% { background: rgba(0, 0, 0, 0.7); }
              }
              @-webkit-keyframes fadeOut /* Safari and Chrome */ {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
              }
              @keyframes fadeOut {
                0% { background: rgba(0, 0, 0, 0.7); }
                100% { background: rgba(0, 0, 0, 0); }
              }
              @-webkit-keyframes scaleUp /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0;
                } 100% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
              }
              @keyframes scaleUp {
                0% {
                -moz-transform: scale(0.8) translateY(1000px);
                -ms-transform: scale(0.8) translateY(1000px);
                -webkit-transform: scale(0.8) translateY(1000px);
                -o-transform: scale(0.8) translateY(1000px);
                transform: scale(0.8) translateY(1000px);
                opacity: 0;
                } 100% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1; }
              }
              @-webkit-keyframes scaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -webkit-transform: scale(0.8) translateY(-1000px);
                -o-transform: scale(0.8) translateY(-1000px);
                transform: scale(0.8) translateY(-1000px);
                opacity: 0; }
              }
              @keyframes scaleDown {
                0% {
                -moz-transform: scale(1) translateY(0px);
                -ms-transform: scale(1) translateY(0px);
                -webkit-transform: scale(1) translateY(0px);
                -o-transform: scale(1) translateY(0px);
                transform: scale(1) translateY(0px);
                opacity: 1;
                } 100% {
                -moz-transform: scale(0.8) translateY(-1000px);
                -ms-transform: scale(0.8) translateY(-1000px);
                -webkit-transform: scale(0.8) translateY(-1000px);
                -o-transform: scale(0.8) translateY(-1000px);
                transform: scale(0.8) translateY(-1000px);
                opacity: 0; }
              }
              @-webkit-keyframes scaleBack /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
              }
              @keyframes scaleBack {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85); }
              }
              @-webkit-keyframes scaleForward /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @keyframes scaleForward {
                0% {
                -moz-transform: scale(0.85);
                -ms-transform: scale(0.85);
                -webkit-transform: scale(0.85);
                -o-transform: scale(0.85);
                transform: scale(0.85);
                } 100% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1); }
              }
              @-webkit-keyframes quickScaleDown /* Safari and Chrome */ {
                0% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
              @keyframes quickScaleDown {
                0% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 99.9% {
                -moz-transform: scale(1);
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                -o-transform: scale(1);
                transform: scale(1);
                } 100% {
                -moz-transform: scale(0);
                -ms-transform: scale(0);
                -webkit-transform: scale(0);
                -o-transform: scale(0);
                transform: scale(0); }
              }
            `}</style>
        );
    };
};

export default Styles;
