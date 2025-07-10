document.addEventListener('DOMContentLoaded', function ()
{
    const body = document.body;

    const isolatedWrapper =     document.createElement('div');
    isolatedWrapper.className = 'uk-sandbox-chatbot';

        const popupState = document.createElement('div');
        popupState.id =    'uk-popupState-chatbot';
        
            const popupMascotte =       document.createElement('video');
            popupMascotte.src =         'https://raw.githubusercontent.com/Alec34pi/IRTSMascotte/master/popupM.mp4';
            popupMascotte.loop =        true;
            popupMascotte.muted =       true;
            popupMascotte.playsInline = true;
            popupMascotte.id =          'uk-popupMascotte-chatbot';

        const mainContent = document.createElement('div');
        mainContent.id =    'uk-mainContent-chatbot';
        
        const mainContentBackground = document.createElement('div');
        mainContentBackground.id =    'uk-mainContent-chatbot-background';

            const closeBtnBorder =     document.createElement('div');
            closeBtnBorder.className = 'uk-closeBtnBorder-chatbot';
            closeBtnBorder.id =        'uk-closeBtnBorder-chatbot';
            
                const closeBtn =       document.createElement('button');
                closeBtn.className =   'uk-close-btn-chatbot';
                closeBtn.id =          'closeBtn-chatbot';
                closeBtn.title =       'Fermer';
                closeBtn.textContent = 'X';
        
            const initPage = document.createElement('div');
            initPage.id =    'uk-initPage-chatbot';
            
                const initTitle =       document.createElement('div');
                initTitle.className =   'uk-title-chatbot';
                initTitle.textContent = 'Bonjour !';
                
                const initMascotte = document.createElement('video');
                    initMascotte.src =          'https://raw.githubusercontent.com/Alec34pi/IRTSMascotte/master/initM.mp4';
                    initMascotte.loop =         true;
                    initMascotte.muted =        true;
                    initMascotte.autoplay =     true;
                    initMascotte.playsInline =  true;
                    initMascotte.id =           'uk-initMascotte-chatbot';
                
                const initButtons = document.createElement('div');
                initButtons.id =    'uk-initButtons-chatbot';
                
                    const siteBtn =       document.createElement('button');
                    siteBtn.className =   'uk-initBtn-chatbot';
                    siteBtn.id =          'initSiteBouton-chatbot';
                    siteBtn.title =       "M'orienter sur le site";
                    siteBtn.textContent = "M'orienter sur le site";
                    
                    const formationBtn =       document.createElement('button');
                    formationBtn.className =   'uk-initBtn-chatbot';
                    formationBtn.id =          'initFormationBouton-chatbot';
                    formationBtn.title =       'Trouver ma formation';
                    formationBtn.textContent = 'Trouver ma formation';

            const formationPage = document.createElement('div');
            formationPage.id =    'uk-Page-chatbot';
            
                const buttonsBorderFormation =     document.createElement('div');
                buttonsBorderFormation.className = 'uk-buttonsBorder-formation-chatbot';
                buttonsBorderFormation.id =        'uk-buttonsBorder-formation-chatbot';
                
                    const backBtnFormation =       document.createElement('button');
                    backBtnFormation.className =   'uk-back-btn-formation-chatbot';
                    backBtnFormation.id =          'backBtn-formation-chatbot';
                    backBtnFormation.title =       'Retour';
                    backBtnFormation.textContent = '←';
                    
                    const resetBtnFormation =       document.createElement('button');
                    resetBtnFormation.className =   'uk-reset-btn-formation-chatbot';
                    resetBtnFormation.id =          'resetBtn-formation-chatbot';
                    resetBtnFormation.title =       'Réinitialiser';
                    resetBtnFormation.textContent = '↻';

                const formationTitle =       document.createElement('div');
                formationTitle.className =   'uk-title-chatbot';
                formationTitle.textContent = 'Trouver ma formation';
                
                const messageZoneFormation = document.createElement('div');
                messageZoneFormation.id =    'uk-formationMessageZone-formation-chatbot';
                
                    const messageInnerFormation = document.createElement('div');
                    messageInnerFormation.id =    'uk-messageInnerFormation-formation-chatbot';
                    messageZoneFormation.appendChild(messageInnerFormation);
                    
                const formationMascotte =   document.createElement('video');
                    formationMascotte.src = 'https://raw.githubusercontent.com/Alec34pi/IRTSMascotte/master/tchatM.mp4';
                    formationMascotte.loop = true;
                    formationMascotte.muted = true;
                    formationMascotte.playsInline = true;
                    formationMascotte.id =    'uk-formationMascotte-formation-chatbot';
                
                const texteZoneFormation = document.createElement('div');
                texteZoneFormation.id =    'uk-formationTexteZone-formation-chatbot';
                
                    const texteInputFormation =       document.createElement('input');
                    texteInputFormation.type =        'text';
                    texteInputFormation.id =          'uk-formationInputText-formation-chatbot';
                    texteInputFormation.placeholder = 'Zone de texte...';
                    texteInputFormation.maxLength =   '50';

                const rangeZoneFormation = document.createElement('div');
                rangeZoneFormation.id =    'uk-formationRangeZone-formation-chatbot';
                
                    const rangeInputFormation = document.createElement('input');
                    rangeInputFormation.type =  'range';
                    rangeInputFormation.id =    'uk-formationInputRange-formation-chatbot';
                    rangeInputFormation.min =   '0';
                    rangeInputFormation.max =   '100';
                    
                    const rangeValueFormation =       document.createElement('span');
                    rangeValueFormation.id =          'uk-formationRangeValue-formation-chatbot';
                    rangeValueFormation.textContent = '50%';

                const buttonsZoneFormation = document.createElement('div');
                buttonsZoneFormation.id =    'uk-formationButtonsZone-formation-chatbot';
                
                    const btnOuiFormation =       document.createElement('button');
                    btnOuiFormation.id =          'uk-btnOui-formation-chatbot';
                    btnOuiFormation.textContent = 'Oui';
                    const btnNonFormation =       document.createElement('button');
                    btnNonFormation.id =          'uk-btnNon-formation-chatbot';
                    btnNonFormation.textContent = 'Non';

                const selectZoneFormation =     document.createElement('div');
                selectZoneFormation.id =        'uk-formationSelectZone-formation-chatbot';

                    const jobSelectFormation =  document.createElement('select');
                    jobSelectFormation.id =     'uk-formationJobSelect-formation-chatbot';

                        const defaultOptionFormation =       document.createElement('option');
                        defaultOptionFormation.value =       '';
                        defaultOptionFormation.disabled =    true;
                        defaultOptionFormation.selected =    true;
                        defaultOptionFormation.textContent = 'Choisir un métier...';

                const finishZoneFormation = document.createElement('div');
                finishZoneFormation.id =    'uk-formationsFinishZone-formation-chatbot';

                    const finishBtnFormation =       document.createElement('button');
                    finishBtnFormation.id =          'uk-formationFinishBtn-formation-chatbot';
                    finishBtnFormation.textContent = 'Réinitialiser le chat';

                const choiceZoneFormation = document.createElement('div');
                choiceZoneFormation.id =    'uk-formationsChoiceZone-formation-chatbot';
                
                    const returnChoiceZoneFormation =        document.createElement('button');
                    returnChoiceZoneFormation.id =           'uk-formationResetChoiceZoneBtn-formation-chatbot';
                    returnChoiceZoneFormation.textContent =  'Retour aux formations conseillé';
                    returnChoiceZoneFormation.disabled =     true;
                    
                    const returnCritere =        document.createElement('button');
                    returnCritere.id =           'uk-formationResetChatZoneBtn-formation-chatbot';
                    returnCritere.textContent =  'Retour aux choix des compétences';
                    returnCritere.disabled =     true;

                const validateBtnFormation1 =     document.createElement('button');
                validateBtnFormation1.id =        'uk-formationValidateBtn1-formation-chatbot';
                validateBtnFormation1.title =     'valider';
                validateBtnFormation1.innerHTML = `
                    <svg width="20" height="20" fill="black" viewBox="0 0 16 16"> <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06L6.06 11.475a.75.75 0 0 1-1.06 0L1.455 7.93a.75.75 0 0 1 1.06-1.06L5.5 9.854l7.985-7.925z"/> </svg>`;

                const validateBtnFormation2 =     document.createElement('button');
                validateBtnFormation2.id =        'uk-formationValidateBtn2-formation-chatbot';
                validateBtnFormation2.title =     'valider';
                validateBtnFormation2.innerHTML = `<svg width="20" height="20" fill="black" viewBox="0 0 16 16"> <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06L6.06 11.475a.75.75 0 0 1-1.06 0L1.455 7.93a.75.75 0 0 1 1.06-1.06L5.5 9.854l7.985-7.925z"/> </svg>`;

            const sitePage = document.createElement('div');
            sitePage.id =    'uk-Page-chatbot';
            
                const buttonsBorderSite =     document.createElement('div');
                buttonsBorderSite.className = 'uk-buttonsBorder-Site-chatbot';
                buttonsBorderSite.id =        'uk-buttonsBorder-Site-chatbot';
                
                    const backBtnSite =       document.createElement('button');
                    backBtnSite.className =   'uk-back-btn-Site-chatbot';
                    backBtnSite.id =          'backBtn-Site-chatbot';
                    backBtnSite.title =       'Retour';
                    backBtnSite.textContent = '←';
                    
                    const resetBtnSite =       document.createElement('button');
                    resetBtnSite.className =   'uk-reset-btn-Site-chatbot';
                    resetBtnSite.id =          'resetBtn-Site-chatbot';
                    resetBtnSite.title =       'Réinitialiser';
                    resetBtnSite.textContent = '↻';

                const SiteTitle =       document.createElement('div');
                SiteTitle.className =   'uk-title-chatbot';
                SiteTitle.textContent = 'Orientation sur le Site';
                
                const messageZoneSite = document.createElement('div');
                messageZoneSite.id =    'uk-SiteMessageZone-Site-chatbot';
                
                    const messageInnerSite = document.createElement('div');
                    messageInnerSite.id =    'uk-messageInnerSite-Site-chatbot';
                    messageZoneSite.appendChild(messageInnerSite);
                    
                const siteMascotte = document.createElement('video');
                    siteMascotte.src = 'https://raw.githubusercontent.com/Alec34pi/IRTSMascotte/master/tchatM.mp4';
                    siteMascotte.loop = true;
                    siteMascotte.muted = true;
                    siteMascotte.playsInline = true;
                    siteMascotte.id =    'uk-siteMascotte-chatbot';

                const buttonsZoneSite = document.createElement('div');
                buttonsZoneSite.id =    'uk-SiteButtonsZone-Site-chatbot';
                
                    const btnOuiSite =       document.createElement('button');
                    btnOuiSite.id =          'uk-btnOui-Site-chatbot';
                    btnOuiSite.textContent = 'Oui';
                    
                    const btnNonSite =       document.createElement('button');
                    btnNonSite.id =          'uk-btnNon-Site-chatbot';
                    btnNonSite.textContent = 'Non';
                    
                const selectZoneSite = document.createElement('div');
                selectZoneSite.id =    'uk-SiteSelectZone-Site-chatbot';
                
                    const jobSelectSite = document.createElement('select');
                    jobSelectSite.id =    'uk-SiteJobSelect-Site-chatbot';
                    
                        const defaultOptionSite =       document.createElement('option');
                        defaultOptionSite.value =       '';
                        defaultOptionSite.disabled =    true;
                        defaultOptionSite.selected =    true;
                        defaultOptionSite.textContent = 'Choisir un métier...';
                        
                const finishZoneSite = document.createElement('div');
                finishZoneSite.id =    'uk-SitesFinishZone-Site-chatbot';
                
                    const finishBtnSite =       document.createElement('button');
                    finishBtnSite.id =          'uk-SiteFinishBtn-Site-chatbot';
                    finishBtnSite.textContent = 'Réinitialiser le chat';
                    
                const validateBtnSite =     document.createElement('button');
                validateBtnSite.id =        'uk-SiteValidateBtn-Site-chatbot';
                validateBtnSite.title =     'valider';
                validateBtnSite.innerHTML = `<svg width="20" height="20" fill="black" viewBox="0 0 16 16"> <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06L6.06 11.475a.75.75 0 0 1-1.06 0L1.455 7.93a.75.75 0 0 1 1.06-1.06L5.5 9.854l7.985-7.925z"/> </svg>`;
         

    popupState.appendChild(popupMascotte);

    closeBtnBorder.appendChild(closeBtn);

    initButtons.appendChild(siteBtn);
    initButtons.appendChild(formationBtn);

    initPage.appendChild(initTitle);
    initPage.appendChild(initMascotte);
    initPage.appendChild(initButtons);

    buttonsBorderFormation.appendChild(backBtnFormation);
    buttonsBorderFormation.appendChild(resetBtnFormation);

    texteZoneFormation.appendChild(texteInputFormation);

    rangeZoneFormation.appendChild(rangeInputFormation);
    rangeZoneFormation.appendChild(rangeValueFormation);

    buttonsZoneFormation.appendChild(btnOuiFormation);
    buttonsZoneFormation.appendChild(btnNonFormation);

    jobSelectFormation.appendChild(defaultOptionFormation);
    selectZoneFormation.appendChild(jobSelectFormation);

    finishZoneFormation.appendChild(finishBtnFormation);

    choiceZoneFormation.appendChild(returnChoiceZoneFormation);
    choiceZoneFormation.appendChild(returnCritere);

    formationPage.appendChild(buttonsBorderFormation);
    formationPage.appendChild(formationTitle);
    formationPage.appendChild(messageZoneFormation);
    formationPage.appendChild(formationMascotte);
    formationPage.appendChild(texteZoneFormation);
    formationPage.appendChild(rangeZoneFormation);
    formationPage.appendChild(buttonsZoneFormation);
    formationPage.appendChild(selectZoneFormation);
    formationPage.appendChild(finishZoneFormation);
    formationPage.appendChild(choiceZoneFormation);
    formationPage.appendChild(validateBtnFormation1);
    formationPage.appendChild(validateBtnFormation2);

    buttonsBorderSite.appendChild(backBtnSite);
    buttonsBorderSite.appendChild(resetBtnSite);

    buttonsZoneSite.appendChild(btnOuiSite);
    buttonsZoneSite.appendChild(btnNonSite);

    selectZoneSite.appendChild(jobSelectSite);

    finishZoneSite.appendChild(finishBtnSite);

    sitePage.appendChild(buttonsBorderSite);
    sitePage.appendChild(SiteTitle);
    sitePage.appendChild(messageZoneSite);
    sitePage.appendChild(siteMascotte);
    sitePage.appendChild(selectZoneSite);
    sitePage.appendChild(buttonsZoneSite);
    sitePage.appendChild(finishZoneSite);
    sitePage.appendChild(validateBtnSite);

    isolatedWrapper.appendChild(sitePage);
    isolatedWrapper.appendChild(formationPage);
    isolatedWrapper.appendChild(initPage);
    isolatedWrapper.appendChild(closeBtnBorder);

    mainContent.appendChild(isolatedWrapper);

    body.appendChild(mainContentBackground);
    body.appendChild(mainContent);
    body.appendChild(popupState);





    const style = document.createElement("style");
    style.textContent = `
    .uk-sandbox-chatbot, 
    .uk-sandbox-chatbot *::before, 
    .uk-sandbox-chatbot *::after,
    .uk-sandbox-chatbot *
    {
        box-sizing: content-box;
    }

    /* style de la pop-up */
        #uk-popupState-chatbot
        {
            all: initial;
            box-sizing: content-box;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: fixed;
            bottom: 20px;
            left: 20px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            cursor: pointer;
            display: block;
            background-color: #BB3E49;
            opacity: 1;
        }

        @media (max-width: 750px), (max-height: 750px)
        {
            #uk-popupState-chatbot
            {
                display: none !important;
            }
            #uk-mainContent-chatbot
            {
                display: none !important;
            }
            #uk-mainContent-chatbot-background
            {
                display: none !important;
            }
        }
            #uk-popupMascotte-chatbot
            {
                width: 75px;
                height: 75px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: block;
                opacity: 1;
            }

    /* style de la page */
        #uk-mainContent-chatbot
        {
            all: initial;
            box-sizing: content-box;
            width: 500px;
            height: 500px;
            position: fixed;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 20px;
            cursor: default;
            bottom: 20px;
            left: 20px;
            display: none;
            opacity: 1;
        }
        #uk-mainContent-chatbot-background
        {
            box-sizing: content-box;
            width: 500px;
            height: 500px;
            position: fixed;
            padding-top: 20px;
            cursor: default;
            bottom: 20px;
            left: 20px;
            display: none;
            border: 1.5px solid #c04848;
            border-radius: 20px;
            background-color: white;
            opacity: 0.90;
        }
            .uk-closeBtnBorder-chatbot
            {
                position: absolute;
                right: 1px;
                top: 1px;
                padding: 2px;
                z-index: 1;
                border-radius: 15px;
                margin: 1px;
                opacity: 1;
            }
                .uk-close-btn-chatbot
                {
                    cursor: pointer;
                    padding: 5px 10px;
                    font-size: 16px;
                    width: 15px;
                    height: 25px;
                    border: none;
                    background-color: #c04848;
                    border-radius: 18px;
                    color: white;
                    opacity: 1;
                }
                    .uk-close-btn-chatbot:hover
                    {
                        background-color: #d25a5a;
                        opacity: 1;
                    }
            .uk-title-chatbot
            {
                margin-top: 50px;
                font-size: 20px;
                text-align: center;
                color: #c04848;
                opacity: 1;
            }

    /* style de la page d'initialisation */
        #uk-initPage-chatbot
        {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            display: none;
            opacity: 1;
        }
            #uk-initMascotte-chatbot
            {
                background: gray;
                width: 250px;
                height: 250px;
                margin: 20px auto;
                margin-top: 50px;
                transition: all 0.3s ease;
                opacity: 1;
                border-radius: 15px;
            }
            #uk-initButtons-chatbot
            {
                display: flex;
                gap: 10px;
                margin-top: 20px;
                align-items: center;
                justify-content: center;
                opacity: 1;
            }
                .uk-initBtn-chatbot
                {
                    padding: 10px;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    border: none;
                    cursor: pointer;
                    background-color: blue;
                    color: white;
                    font-size: 15px;
                    background-color: #c04848;
                    border-radius: 10px;
                    color: white;
                    opacity: 1;
                }
                    .uk-initBtn-chatbot:hover
                    {
                        background-color: #d25a5a;
                        opacity: 1;
                    }

    /* style de la page de formation */
        #uk-Page-chatbot
        {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            display: none;
            opacity: 1;
        }
            .uk-buttonsBorder-formation-chatbot
            {
                position: absolute;
                right: 1px;
                top: 1px;
                padding: 2px;
                padding-right: 41px;
                opacity: 1;
            }
                .uk-back-btn-formation-chatbot
                {
                    cursor: pointer;
                    padding: 5px 10px;
                    padding-bottom: 6px;
                    font-size: 16px;
                    width: 15px;
                    height: 25px;
                    border: none;
                    background-color: #c04848;
                    border-radius: 18px;
                    color: white;
                    margin-right: 3px;
                    opacity: 1;
                }
                    .uk-back-btn-formation-chatbot:hover
                    {
                        background-color: #d25a5a;
                        opacity: 1;
                    }
                .uk-reset-btn-formation-chatbot
                {
                    cursor: pointer;
                    padding: 5px 10px;
                    font-size: 16px;
                    width: 15px;
                    height: 25px;
                    border: none;
                    background-color: #c04848;
                    border-radius: 28px;
                    color: white;
                    opacity: 1;
                }
                    .uk-reset-btn-formation-chatbot:hover
                    {
                        background-color: #d25a5a;
                        opacity: 1;
                    }
            #uk-formationMessageZone-formation-chatbot
            {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: 64%;
                height: 278px;
                position: absolute;
                top: 271px;
                left: 50%;
                transform: translate(-50%, -50%);
                padding-right: 10px;
                padding-left: 10px;
                z-index: 0;
                overflow: hidden;
                padding-bottom: 50px;
                border: solid 1.5px #c04848;
                border-bottom: 0;
                border-radius: 10px;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
                color: white;
                opacity: 1;
                background-color: white;
            }
                #uk-messageInnerFormation-formation-chatbot
                {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    width: 100%;
                    max-height: 100%;
                    border-bottom: solid 1px #c04848;
                    padding-top: 5px;
                    opacity: 1;
                }
                #uk-messageInnerFormation-formation-chatbot::-webkit-scrollbar
                {
                    display: none;
                    opacity: 1;
                }
                    .uk-chat-message-formation-chatbot
                    {
                        padding: 8px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        max-width: 80%;
                        word-wrap: break-word;
                        font-size: 16px;
                        opacity: 1;
                    }
                        .uk-user-message-formation-chatbot
                        {
                            background-color: #d56f6f;
                            align-self: flex-end;
                            opacity: 1;
                        }
                        .uk-bot-message-formation-chatbot
                        {
                            background-color: #b84d4d;
                            color: white;
                            align-self: flex-start;
                            opacity: 1;
                        }
                    .uk-linkDiv-formation-chatbot
                    {
                        padding: 8px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        max-width: 80%;
                        background-color: white;
                        color: #b84d4d;
                        align-self: flex-start;
                        border: solid 1px #b84d4d;
                        opacity: 1;
                    }

            #uk-formationMascotte-formation-chatbot
            {
                background: gray;
                width: 100px;
                height: 100px;
                position: absolute;
                bottom: 10px;
                left: 45px;
                margin: none;
                z-index: 10;
                margin: 20px auto;
                opacity: 1;
            }

            #uk-formationTexteZone-formation-chatbot
            {
                width: 66%;
                position: absolute;
                bottom: 6%;
                right: 5%;
                opacity: 1;
            }
                #uk-formationInputText-formation-chatbot
                {
                    border: none;
                    height: 52px;
                    width: 267px;
                    outline: none;
                    opacity: 1;

                    border: solid 1.5px #c04848;
                    border-left: 0;
                    border-right: 0;
                }

            #uk-formationRangeZone-formation-chatbot
            {
                align-items: center;
                width: 272px;
                height: 54px;
                position: absolute;
                bottom: 31px;
                right: 84px;
                align-content: center;
                border: solid 1.5px #c04848;
                border-left: 0;
                border-right: 0;
                opacity: 1;
            }
                #uk-formationInputRange-formation-chatbot
                {
                    width: 85%;
                    height: 8px;
                    appearance: none;
                    background-color: #c04848;
                    border-radius: 5px;
                    outline: none;
                    opacity: 1;
                }
                #uk-formationInputRange-formation-chatbot::-webkit-slider-thumb
                {
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    background-color: black;
                    border-radius: 50%;
                    cursor: pointer;
                    opacity: 1;
                }
                #uk-formationRangeValue-formation-chatbot
                {
                    width: 15%;
                    text-align: center;
                    color: black;
                    font-size: 16px;
                    opacity: 1;
                }

            #uk-formationButtonsZone-formation-chatbot
            {
                    position: absolute;
                    bottom: 31px;
                    right: 20px;
                    display: none;
                    width: 335px;
                    display: flex;
                    align-items: center;
                    height: 54px;
                    z-index: 9;
                    border: solid 1.5px #c04848;
                    border-left: 0;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    background-color: white;
                    opacity: 1;
            }
                #uk-formationButtonsZone-formation-chatbot button
                {
                    width: 49%;
                    height: 97%;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: white;
                    opacity: 1;
                }
                    #uk-formationButtonsZone-formation-chatbot button:hover
                    {
                        background-color: #f7f7f7;
                        color: #c04848;
                        opacity: 1;
                    }
                    #uk-btnNon-formation-chatbot
                    {
                        border-top-right-radius: 8px;
                        border-bottom-right-radius: 8px;
                        border: none;
                        border-left: solid 0.5px #c04848;
                        opacity: 1;
                    }
                    #uk-btnOui-formation-chatbot
                    {
                        border: none;
                        border-right: solid 0.5px #c04848;
                        opacity: 1;
                    }

            #uk-formationsChoiceZone-formation-chatbot
            {
                    position: absolute;
                    bottom: 31px;
                    right: 20px;
                    display: none;
                    width: 335px;
                    display: flex;
                    align-items: center;
                    height: 54px;
                    z-index: 9;
                    border: solid 1.5px #c04848;
                    border-left: 0;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    background-color: white;
                    opacity: 1;
            }
                #uk-formationsChoiceZone-formation-chatbot button
                {
                    width: 49%;
                    height: 97%;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: white;
                    opacity: 1;
                }
                    #uk-formationsChoiceZone-formation-chatbot button:hover
                    {
                        background-color: #f7f7f7;
                        color: #c04848;
                        opacity: 1;
                    }
                    #uk-formationResetChatZoneBtn-formation-chatbot
                    {
                        border-top-right-radius: 8px;
                        border-bottom-right-radius: 8px;
                        border: none;
                        border-left: solid 0.5px #c04848;
                        opacity: 1;
                    }
                    #uk-formationResetChoiceZoneBtn-formation-chatbot
                    {
                        border: none;
                        border-right: solid 0.5px #c04848;
                        opacity: 1;
                    }

            #uk-formationSelectZone-formation-chatbot
            {
                position: absolute;
                bottom: 31px;
                right: 81px;
                display: none;
                width: 55%;
                height: 54px;
                display: flex;
                align-items: center;
                border-top: solid 1.5px #c04848;
                border-bottom: solid 1.5px #c04848;
                opacity: 1;
            }
                #uk-formationJobSelect-formation-chatbot
                {
                    flex: 1;
                    height: 100%;
                    width: 272px;
                    font-size: 16px;
                    border: none;
                    padding: 0 10px;
                    background-color: white;
                    outline: none;
                    text-align: center;
                    opacity: 1;
                }
                #uk-formationJobSelect-formation-chatbot option
                {
                    font-size: 16px;
                    text-align: center;
                    opacity: 1;
                }

            #uk-formationsFinishZone-formation-chatbot
            {
                position: absolute;
                bottom: 41px;
                right: 221px;
                display: none;
                width: 150px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 52px;
                z-index: 9;
                opacity: 1;
            }
                #uk-formationsFinishZone-formation-chatbot button
                {
                    width: 335px;
                    height: 100%;
                    font-size: 16px;
                    border-radius: 10px;
                    cursor: pointer;
                    border: solid 1.5px #c04848;
                    border-left: 0;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    opacity: 1;
                }
                    #uk-formationFinishBtn-formation-chatbot
                    {
                        background-color: white;
                        color: black;
                        opacity: 1;
                    }
                    #uk-formationFinishBtn-formation-chatbot:hover
                    {
                        color: #c04848;
                        background-color: #f7f7f7;
                        opacity: 1;
                    }

            #uk-formationValidateBtn1-formation-chatbot
            {
                width: 64px;
                height: 52px;
                border: none;
                position: absolute;
                bottom: 31px;
                right: 20px;
                border: solid 1.5px #c04848;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                cursor: pointer;
                background-color: white;
                color: #c04848;
                z-index: 9;
                opacity: 1;
            }
                #uk-formationValidateBtn1-formation-chatbot:hover svg
                {
                    fill: #c04848;
                    opacity: 1;
                }

            #uk-formationValidateBtn2-formation-chatbot
            {
                width: 64px;
                height: 52px;
                border: none;
                position: absolute;
                bottom: 31px;
                right: 20px;
                border: solid 1.5px #c04848;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                cursor: pointer;
                background-color: white;
                color: #c04848;
                z-index: 9;
                opacity: 1;
            }
                #uk-formationValidateBtn2-formation-chatbot:hover svg
                {
                    fill: #c04848;
                    opacity: 1;
                }





            .uk-buttonsBorder-Site-chatbot
            {
                position: absolute;
                right: 1px;
                top: 1px;
                padding: 2px;
                padding-right: 41px;
                opacity: 1;
            }
                .uk-back-btn-Site-chatbot
                {
                    cursor: pointer;
                    padding: 5px 10px;
                    padding-bottom: 6px;
                    font-size: 16px;
                    width: 15px;
                    height: 25px;
                    border: none;
                    background-color: #c04848;
                    border-radius: 18px;
                    color: white;
                    margin-right: 3px;
                    opacity: 1;
                }
                    .uk-back-btn-Site-chatbot:hover
                    {
                        background-color: #d25a5a;
                        opacity: 1;
                    }
                .uk-reset-btn-Site-chatbot
                {
                    cursor: pointer;
                    padding: 5px 10px;
                    font-size: 16px;
                    width: 15px;
                    height: 25px;
                    border: none;
                    background-color: #c04848;
                    border-radius: 18px;
                    color: white;
                    opacity: 1;
                }
                    .uk-reset-btn-Site-chatbot:hover
                    {
                        background-color: #d25a5a;
                        opacity: 1;
                    }
            #uk-SiteMessageZone-Site-chatbot
            {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                width: 64%;
                height: 278px;
                position: absolute;
                top: 271px;
                left: 50%;
                transform: translate(-50%, -50%);
                padding-right: 10px;
                padding-left: 10px;
                z-index: 0;
                overflow: hidden;
                padding-bottom: 50px;
                border: solid 1.5px #c04848;
                border-bottom: 0;
                border-radius: 10px;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
                color: white;
                opacity: 1;
                background-color: white;
            }
                #uk-messageInnerSite-Site-chatbot
                {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    width: 100%;
                    max-height: 100%;
                    border-bottom: solid 1px #c04848;
                    padding-top: 5px;
                    font-size: 16px;
                    opacity: 1;
                }
                #uk-messageInnerSite-Site-chatbot::-webkit-scrollbar
                {
                    display: none;
                    opacity: 1;
                }
                    .uk-chat-message-site-chatbot
                    {
                        padding: 8px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        max-width: 80%;
                        word-wrap: break-word;
                        font-size: 16px;
                        opacity: 1;
                    }
                        .uk-user-message-site-chatbot
                        {
                            background-color: #d56f6f ;
                            align-self: flex-end;
                            opacity: 1;
                        }
                        .uk-bot-message-site-chatbot
                        {
                            background-color: #b84d4d;
                            color: white;
                            align-self: flex-start;
                            opacity: 1;
                        }
                    .uk-linkDiv-Site-chatbot
                    {
                        padding: 8px;
                        margin-bottom: 5px;
                        border-radius: 10px;
                        max-width: 80%;
                        background-color:#b84d4d;
                        color: white;
                        align-self: flex-start;
                        opacity: 1;
                    }


                #uk-siteMascotte-chatbot
                {
                    background-color: gray;
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    bottom: 10px;
                    left: 45px;
                    margin: none;
                    z-index: 100;
                    margin: 20px auto;
                    opacity: 1;
                }

                #uk-SiteSelectZone-Site-chatbot
                {
                        position: absolute;
                        bottom: 31px;
                        right: 81px;
                        display: none;
                        width: 55%;
                        height: 54px;
                        display: flex;
                        align-items: center;
                        border-top: solid 1.5px #c04848;
                        border-bottom: solid 1.5px #c04848;
                        opacity: 1;
                    }
                        #uk-SiteJobSelect-Site-chatbot
                        {
                            flex: 1;
                            height: 100%;
                            width: 272px;
                            font-size: 16px;
                            border: none;
                            padding: 0 10px;
                            background-color: white;
                            outline: none;
                            text-align: center;
                            opacity: 1;
                        }
                        #uk-SiteJobSelect-Site-chatbot option
                        {
                            font-size: 16px;
                            text-align: center;
                            opacity: 1;
                        }

                #uk-SiteButtonsZone-Site-chatbot
                {
                        position: absolute;
                        bottom: 31px;
                        right: 23px;
                        display: none;
                        width: 331px;
                        display: flex;
                        align-items: center;
                        height: 44px;
                        z-index: 9;
                        border: solid 1.5px #c04848;
                        border-left: 0;
                        border-top-right-radius: 8px;
                        border-bottom-right-radius: 8px;
                        background-color: white;
                        opacity: 1;
                }
                    #uk-SiteButtonsZone-Site-chatbot button
                    {
                        width: 49%;
                        height: 97%;
                        font-size: 16px;
                        cursor: pointer;
                        background-color: white;
                        opacity: 1;
                    }
                        #uk-SiteButtonsZone-Site-chatbot button:hover
                        {
                            background-color: #f7f7f7;
                            color: #c04848;
                            opacity: 1;
                        }
                        #uk-btnNon-Site-chatbot
                        {
                            border-top-right-radius: 8px;
                            border-bottom-right-radius: 8px;
                            border: none;
                            border-left: solid 0.5px #c04848;
                            opacity: 1;
                        }
                        #uk-btnOui-Site-chatbot
                        {
                            border: none;
                            border-right: solid 0.5px #c04848;
                            opacity: 1;
                        }

                #uk-SitesFinishZone-Site-chatbot
                {
                    position: absolute;
                    bottom: 41px;
                    right: 221px;
                    display: none;
                    width: 150px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 52px;
                    z-index: 9;
                    opacity: 1;
                }
                    #uk-SitesFinishZone-Site-chatbot button
                    {
                        width: 335px;
                        height: 100%;
                        font-size: 16px;
                        border-radius: 10px;
                        cursor: pointer;
                        border: solid 1.5px #c04848;
                        border-left: 0;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                        opacity: 1;
                    }
                        #uk-SiteFinishBtn-Site-chatbot
                        {
                            background-color: white;
                            color: black;
                            opacity: 1;
                        }
                        #uk-SiteFinishBtn-Site-chatbot:hover
                        {
                            color: #c04848;
                            background-color: #f7f7f7;
                            opacity: 1;
                        }

                #uk-SiteValidateBtn-Site-chatbot
                {
                    width: 64px;
                    height: 52px;
                    border: none;
                    position: absolute;
                    bottom: 31px;
                    right: 20px;
                    border: solid 1.5px #c04848;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    cursor: pointer;
                    background-color: white;
                    color: #c04848;
                    z-index: 9;
                    opacity: 1;
                }
                    #uk-SiteValidateBtn-Site-chatbot:hover svg
                    {
                        fill: #c04848;
                        opacity: 1;
                    }
    `;
    document.head.appendChild(style);





    /**
     * Gère l’ouverture de la pop-up de formation.
     * 
     * Déclenchée lorsqu’un utilisateur clique sur l’élément `popupState`, cette fonction
     * masque la pop-up d’accueil et affiche le contenu principal, l’arrière-plan, ainsi que
     * la page d’initialisation pour commencer l’interaction utilisateur.
     * 
     * @function ouvrirPopup
     * @returns {void} Cette fonction ne retourne rien.
     */
    popupState.addEventListener('click', ouvrirPopup);
    function ouvrirPopup()
    {
        popupState.style.display =            'none';
        mainContent.style.display =           'block';
        mainContentBackground.style.display = 'block';
        initPage.style.display =              'flex';
    }


    /**
     * Gère la fermeture de la pop-up de formation.
     * 
     * Déclenchée lorsque l’utilisateur clique sur le bouton `closeBtn`, cette fonction
     * masque la pop-up, le contenu principal, les pages de formation et de site, puis
     * réinitialise les zones de messages associées.
     * 
     * @function fermerPopup
     * @returns {void} Cette fonction ne retourne rien.
     */
    closeBtn.addEventListener('click', fermerPopup);
    function fermerPopup()
    {
        popupState.style.display =            'block';
        mainContent.style.display =           'none';
        mainContentBackground.style.display = 'none';
        initPage.style.display =              'none';
        formationPage.style.display =         'none';
        sitePage.style.display =              'none';
        messageInnerFormation.innerHTML =     '';
        messageInnerSite.innerHTML =          '';
    }


    /**
     * Module de gestion interactive des formations adaptées aux utilisateurs.
     * 
     * Ce module comprend les fonctions nécessaires pour :
     * - Récupérer et traiter les réponses des utilisateurs liées aux soft skills et au niveau de formation.
     * - Filtrer, scorer, trier et sélectionner les formations correspondant aux critères utilisateur.
     * - Afficher dynamiquement les listes de métiers, niveaux, et formations.
     * - Gérer l'affichage des messages dans la conversation avec distinction utilisateur/bot.
     * - Sauvegarder l'historique de la conversation dans le sessionStorage.
     * - Permettre la navigation entre étapes (choix des compétences, affichage des formations, consultation des fiches métier).
     * - Gérer les interactions utilisateur telles que choix, validation, retour en arrière et réinitialisation du chat.
     * 
     * Toutes les interactions utilisent une interface dynamique avec gestion fine des zones visibles et des états des boutons.
     * L'historique des échanges est conservé pour améliorer l'expérience utilisateur et assurer la continuité.
     * 
     * Les fonctions exposées dans ce module sont utilisées conjointement pour piloter le parcours complet
     * de découverte et sélection des formations adaptées, en s'appuyant sur des données JSON distantes ou en session.
     * 
     * @module trouverFormation
     */
    formationBtn.addEventListener('click', trouverFormation);
    function trouverFormation()
    {
        initPage.style.display =        'none';
        formationPage.style.display =   'block';

        let userName =              sessionStorage.getItem('userName') || "";
        let experience =            sessionStorage.getItem('experience') || "";
        let boolRespond =           null;

        let currentStepFormation =  sessionStorage.getItem('currentStepFormation') || 'start';
        let chatHistoryFormation =  JSON.parse(sessionStorage.getItem('chatHistoryFormation')) || [];
        let currentStepSoftSkills = parseInt(sessionStorage.getItem('currentStepSoftSkills')) || 0;

        let linkHistory =           JSON.parse(sessionStorage.getItem('linkHistory')) ||[];

        handleButtonsFormation(true);
        remplirListeMetiers();

        if (chatHistoryFormation.length > 2)
        {
            afficherZone('text');
            chatHistoryFormation.pop();

            chatHistoryFormation.forEach(item =>
            {
                if (item.type === 'message')
                {
                    showMessageFormation(messageInnerFormation, item.content, item.sender, false);
                }
                else if (item.type === 'link')
                {
                    showFicheMetier(messageInnerFormation, item.content, false);
                }
            });
            switch (currentStepFormation)
            {
                case 'start' :
                    askName();
                    break;
                case 'askExperience':
                    askExperience();
                    break;
                case 'askJobOrientation':
                    askJobOrientation();
                    break;
                case 'showJobSelection':
                    showJobSelection();
                    break;
                case 'proposeDiscovery':
                    proposeDiscovery();
                    break;
                case 'askDiscovery':
                    askDiscovery();
                    break;
                case 'end':
                    endChat();
                    break;
                case 'softSkillsQuestion':
                    softSkillsQuestion(currentStepSoftSkills);
                    break;
                case 'niveauQuestion':
                    askNiveau();
                    break;
                case 'AffichageFormationsCorrespondant':
                    softSkillsAffichage();
                    break;
                case 'endFormation':
                    endChatFormation();
                    break;
            }
        } else
        { 
            afficherZone('text');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "👋 Bonjour et bienvenue !", 'bot');
            }, 100);

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Je suis là pour t'aider à trouver la formation dans le travail social qui te correspond. Prêt(e) à commencer ?", 'bot');
            }, 200);

            setTimeout(() =>
            {
                askName();
            }, 450);
        }


        /**
         * Demande le prénom de l’utilisateur et traite sa saisie.
         * 
         * Cette fonction affiche un message demandant à l’utilisateur son prénom.
         * Lorsque celui-ci valide sa réponse via le bouton `validateBtnFormation1`, 
         * le prénom est enregistré dans la variable `userName`, affiché dans la 
         * conversation, puis stocké dans `sessionStorage` pour une utilisation ultérieure.
         * La fonction déclenche ensuite l’étape suivante via `askExperience`.
         * 
         * @function askName
         * @returns {void} Cette fonction ne retourne rien.
         */
        function askName()
        { 
            afficherZone('text');

            showMessageFormation(messageInnerFormation, "Quel est votre prénom ?", 'bot');
        
            validateBtnFormation1.addEventListener('click', () =>
            {
                const nameInput = texteInputFormation.value.trim();

                if (nameInput)
                {
                    userName = nameInput;
                    showMessageFormation(messageInnerFormation, userName, 'user');
                    
                    texteInputFormation.value = "";
                    sessionStorage.setItem('userName', userName);

                    askExperience();
                }
            });
        }


        /**
         * Demande à l’utilisateur s’il a une expérience dans le travail social.
         * 
         * Cette fonction affiche une question à l’utilisateur concernant son expérience dans le travail social.
         * Selon la réponse (Oui/Non), elle met à jour la variable `boolRespond`, enregistre l’information dans
         * `sessionStorage`, et appelle la fonction appropriée pour poursuivre l’interaction.
         * Elle met également à jour l’étape actuelle dans `sessionStorage` afin d’assurer la reprise au bon endroit
         * en cas d’interruption.
         * 
         * @function askExperience
         * @returns {void} Cette fonction ne retourne rien.
         */
        function askExperience()
        {
            sessionStorage.setItem('currentStepFormation', 'askExperience');
            afficherZone('buttons');
            
            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, `${userName}, As-tu déjà une expérience dans le travail social ?`, 'bot');
            }, 250);

            btnOuiFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Oui.", 'user');
                boolRespond = true;

                sessionStorage.setItem('experience', experience);

                handleExperienceResponse(boolRespond);
            };

            btnNonFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Non.", 'user');
                boolRespond = false;

                handleExperienceResponse(boolRespond);
            };
        }


        /**
         * Traite la réponse de l’utilisateur concernant son expérience dans le travail social.
         * 
         * En fonction de la réponse booléenne fournie (`true` ou `false`), cette fonction oriente
         * l’utilisateur vers le parcours correspondant : `askJobOrientation` pour une personne
         * expérimentée, ou `askDiscovery` pour une découverte du domaine.
         * 
         * @function handleExperienceResponse
         * @param {boolean} response - Indique si l’utilisateur a de l’expérience dans le travail social.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function handleExperienceResponse(response)
        {
            if (response === true)
            {
                askJobOrientation();
            }
            else
            {
                askDiscovery();
            }
        }


        /**
         * Demande à l’utilisateur s’il connaît le métier vers lequel il souhaite s’orienter.
         * 
         * Cette fonction affiche une question liée à l’orientation professionnelle. En fonction
         * de la réponse de l’utilisateur (Oui/Non), elle met à jour la variable `boolRespond`,
         * puis appelle la fonction `handleOrientationResponse` pour poursuivre l’interaction.
         * L’étape en cours est également enregistrée dans `sessionStorage` pour assurer le suivi.
         * 
         * @function askJobOrientation
         * @returns {void} Cette fonction ne retourne rien.
         */
        function askJobOrientation()
        { 
            sessionStorage.setItem('currentStepFormation', 'askJobOrientation');
            afficherZone('buttons');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "D'accord, sais-tu vers quel métier tu t'orientes ?", 'bot');
            }, 250);

            btnOuiFormation.onclick = () =>
            {
                boolRespond = true;

                handleOrientationResponse(boolRespond);
            };

            btnNonFormation.onclick = () =>
            {
                boolRespond = false;

                handleOrientationResponse(boolRespond);
            }; 
        }


        /**
         * Traite la réponse de l’utilisateur concernant son orientation professionnelle.
         * 
         * Selon que l’utilisateur connaisse ou non le métier qu’il vise (`true` ou `false`), 
         * cette fonction oriente la suite du processus : `showJobSelection` pour sélectionner 
         * un métier connu, ou `proposeDiscovery` pour explorer des pistes professionnelles.
         * 
         * @function handleOrientationResponse
         * @param {boolean} response - Indique si l’utilisateur connaît son orientation professionnelle.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function handleOrientationResponse(response)
        {
            if (response === true)
            {
                showMessageFormation(messageInnerFormation, "Oui.", 'user');
                
                showJobSelection();
            }
            else
            {
                showMessageFormation(messageInnerFormation, "Non.", 'user');
                
                proposeDiscovery();
            }
        }


        /**
         * Affiche une liste de métiers pour permettre à l’utilisateur de faire un choix.
         * 
         * Cette fonction affiche un message demandant à l’utilisateur de sélectionner un métier
         * dans une liste, puis active la zone de sélection (`list1`). Une fois la sélection validée,
         * elle identifie l’index du métier choisi dans `listeFormationsSite`, l’affiche dans la conversation,
         * et appelle la fonction `askConsultJobSheet`. L’étape actuelle ainsi que l’index sélectionné sont
         * enregistrés dans `sessionStorage` pour garantir une reprise fluide.
         * 
         * @function showJobSelection
         * @returns {void} Cette fonction ne retourne rien.
         */
        function showJobSelection()
        { 
            sessionStorage.setItem('currentStepFormation', 'showJobSelection');
            afficherZone('list1');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "De quel métier s'agit-il ?", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Clique sur 'Choisis un métier...' puis valide", 'bot');
            }, 300);

            validateBtnFormation1.addEventListener('click', handleFormationSubmit);
            function handleFormationSubmit()
            {
                const selectedValue = jobSelectFormation.value;

                if (selectedValue)
                {
                    const selectedIndex = window.listeFormationsSite.findIndex(formation => formation.nom === selectedValue);
                    showMessageFormation(messageInnerFormation, selectedValue, 'user');

                    validateBtnFormation1.removeEventListener('click', handleFormationSubmit);

                    askConsultJobSheet(selectedIndex);
                }
            } 
        }


        /**
         * Propose à l’utilisateur de consulter la fiche métier d’un métier sélectionné.
         * 
         * Cette fonction demande à l’utilisateur s’il souhaite consulter la fiche métier
         * correspondant au métier choisi. Selon sa réponse, elle appelle `handleConsultJobSheetnResponse`
         * avec le lien vers la fiche métier ou `null`, et poursuit la conversation en conséquence.
         * 
         * @function askConsultJobSheet
         * @param {number} jobindex - L’index du métier sélectionné dans la liste des formations.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function askConsultJobSheet(jobindex)
        { 
            afficherZone('buttons');

            const job =     window.listeFormationsSite[jobindex].nom;
            const jobLink = window.listeFormationsSite[jobindex].lien;

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, `Veux-tu consulter la fiche métier de ${job} sur notre site ?`, 'bot');
            }, 250);

            btnOuiFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Oui.", 'user');
                boolRespond = true;
                
                handleConsultJobSheetnResponse(boolRespond, jobLink);
            };

            btnNonFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Non.", 'user');
                boolRespond = false;
                
                handleConsultJobSheetnResponse(boolRespond, null);
            };
        }


        /**
         * Gère la réponse de l’utilisateur concernant la consultation d’une fiche métier.
         * 
         * Si l’utilisateur accepte (`true`), la fiche métier est affichée via `showFicheMetier`
         * et la conversation est terminée avec `endChat`. Sinon (`false`), le chatbot propose
         * d’explorer d’autres métiers avec `proposeDiscovery`.
         * 
         * @function handleConsultJobSheetnResponse
         * @param {boolean} response - Indique si l’utilisateur souhaite consulter la fiche métier.
         * @param {string|null} jobLink - Lien vers la fiche métier, ou `null` si non applicable.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function handleConsultJobSheetnResponse(response, jobLink) {
            if (response === true)
            {
                showFicheMetier(messageInnerFormation, jobLink);
                
                endChat();
            }
            else
            {
                proposeDiscovery();
            }
        }


        /**
         * Propose à l’utilisateur de découvrir d’autres métiers en fonction de ses intérêts.
         * 
         * Cette fonction affiche une question invitant l’utilisateur à explorer d’autres métiers
         * potentiellement adaptés. Si l’utilisateur accepte, la découverte est lancée via
         * `softSkillsQuestion`. En cas de refus, la conversation est terminée avec `endChat`.
         * 
         * @function proposeDiscovery
         * @returns {void} Cette fonction ne retourne rien.
         */
        function proposeDiscovery()
        {
            sessionStorage.setItem('currentStepFormation', 'proposeDiscovery');
            afficherZone('buttons');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Veux-tu découvrir d'autres métiers qui pourraient aussi te correspondre ?", 'bot');
            }, 250);

            btnOuiFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Oui.", 'user');
                
                setTimeout(() =>
                {
                    softSkillsQuestion(currentStepSoftSkills);
                }, 200);
            };

            btnNonFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Non.", 'user');
                
                endChat();
            };
        }


        /**
         * Propose à l’utilisateur de découvrir un métier dans le domaine de l’intervention sociale.
         * 
         * Cette fonction invite l’utilisateur à explorer un métier correspondant dans le secteur social.
         * En cas d’acceptation, la découverte est lancée via `softSkillsQuestion`. En cas de refus,
         * la conversation se termine avec `endChat`.
         * 
         * @function askDiscovery
         * @returns {void} Cette fonction ne retourne rien.
         */
        function askDiscovery()
        { 
            sessionStorage.setItem('currentStepFormation', 'askDiscovery');
            afficherZone('buttons');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Veux-tu que l'on essaie de trouver le métier de l'intervention sociale qui te correspond ?", 'bot');
            }, 250);

            btnOuiFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Oui.", 'user');
                
                setTimeout(() =>
                {
                    softSkillsQuestion(currentStepSoftSkills);
                }, 200);
            };

            btnNonFormation.onclick = () =>
            {
                showMessageFormation(messageInnerFormation, "Non.", 'user');
                
                endChat();
            }; 
        }


        /**
         * Termine la conversation avec l’utilisateur.
         * 
         * Cette fonction affiche un message de remerciement, change la zone d’affichage pour 
         * indiquer la fin de la conversation (zone 'finish'), et enregistre l’étape finale 
         * dans `sessionStorage` pour marquer la fin de l’interaction.
         * 
         * @function endChat
         * @returns {void} Cette fonction ne retourne rien.
         */
        function endChat()
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepFormation', 'end');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Merci pour ton temps !", 'bot');
            }, 300);
        }


        /**
         * Termine la session de chat formation.
         * 
         * Cette fonction met à jour l’état courant dans `sessionStorage`, affiche la zone 
         * de choix de retour, puis affiche un message final après un court délai pour guider 
         * l’utilisateur vers la suite.
         * 
         * @function endChatFormation
         * @returns {void} Cette fonction ne retourne rien.
         */
        function endChatFormation()
        {
            sessionStorage.setItem('currentStepFormation', 'endFormation');
            afficherZone('returnChoice');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Tu peux retourner à la liste des formations qui te correspondent ou revoir tes compétences si besoin", 'bot');
            }, 150);
        }


        /**
         * Démarre la séquence de questions sur les soft skills dans le parcours de formation.
         * 
         * Cette fonction :
         * - Enregistre l’étape actuelle dans `sessionStorage`.
         * - Affiche une zone interactive contenant des boutons.
         * - Présente progressivement des messages d’introduction via un bot.
         * - Parcourt une liste de soft skills (aptitudes comportementales).
         * - Pour chaque aptitude, demande à l’utilisateur s’il pense la posséder.
         * - Enregistre les réponses (oui/non) dans `sessionStorage`.
         * 
         * À la fin du questionnaire :
         * - Affiche un message de conclusion.
         * - Passe à l’étape suivante via la fonction `askNiveau`.
         * 
         * @function softSkillsQuestion
         * @param {number} indexBoucleStart - L’indice de départ dans la boucle des questions (utile pour reprise ou poursuite).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function softSkillsQuestion(indexBoucleStart)
        {
            sessionStorage.setItem('currentStepFormation', 'softSkillsQuestion');
            afficherZone('buttons');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Lançons ensemble la découverte !", 'bot');
            }, 150);

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Je vais te poser des questions et tu me diras si tu penses posséder cette faculté ou pas.", 'bot');
            }, 250);

            const SoftSkillsData =
            [
                "la capacité à s'organiser",
                "l'adaptabilité",
                "l'autonomie",
                "le sens des responsabilités",
                "la discipline et l'auto-discipline",
                "la gestion du stress",
                "l'audace",
                "l'esprit d'initiative",
                "la gestion du temps",
                "la communication",
                "l'esprit d'équipe ou de coopération",
                "l'intelligence émotionnelle, parfois appelée empathie",
                "la négociation",
                "la capacité à déléguer",
                "la tolérance",
                "la confiance en soi",
                "la résolution de conflits et la méditation",
                "Le leadership ou capacité à motiver",
                "la capacité à créer et entretenir un réseau",
                "la mémoire",
                "l'attention et la concentration",
                "l'esprit critique",
                "la créativité",
                "la capacité à se remettre en question et à rebondir (résilience)",
                "la persévérance",
                "la capacité de synthèse",
                "la curiosité intellectuelle",
            ];

            setTimeout(() =>
            {
                function poserQuestionSoftskills(index)
                {
                    if(index < SoftSkillsData.length)
                    {
                        handleButtonsFormation(true);

                        const question = `(${index + 1}/${SoftSkillsData.length}) Considérez-vous posséder cette aptitude : ${SoftSkillsData[index]} ?`;
                        showMessageFormation(messageInnerFormation, question, 'bot');

                        btnOuiFormation.onclick = () =>
                        {
                            handleButtonsFormation(false);

                            showMessageFormation(messageInnerFormation, "Oui.", 'user');
                            sessionStorage.setItem('currentStepSoftSkills', index + 1);

                            const reponses = JSON.parse(sessionStorage.getItem('reponseUserSoftSkills') || '[]');
                            reponses.push({ aptitude: SoftSkillsData[index], reponse: true });
                            sessionStorage.setItem('reponseUserSoftSkills', JSON.stringify(reponses));

                            setTimeout(() =>
                            {
                                poserQuestionSoftskills(index + 1);
                            }, 200);
                        };

                        btnNonFormation.onclick = () =>
                        {
                            handleButtonsFormation(false);

                            showMessageFormation(messageInnerFormation, "Non.", 'user');
                            sessionStorage.setItem('currentStepSoftSkills', index + 1);

                            const reponses = JSON.parse(sessionStorage.getItem('reponseUserSoftSkills') || '[]');
                            reponses.push({ aptitude: SoftSkillsData[index], reponse: false });
                            sessionStorage.setItem('reponseUserSoftSkills', JSON.stringify(reponses));

                            setTimeout(() =>
                            {
                                poserQuestionSoftskills(index + 1);
                            }, 200);
                        }; 
                    }
                    else
                    {
                        handleButtonsFormation(true);
                        afficherZone('');

                        askNiveau();
                    }
                }

                poserQuestionSoftskills(indexBoucleStart);
            }, 300);
        }


        /**
         * Initialise la question sur le niveau de formation dans le processus de formulaire.
         * 
         * Cette fonction :
         * - Met à jour l’étape actuelle dans `sessionStorage`.
         * - Remplit dynamiquement une liste de niveaux de formation.
         * - Affiche la zone correspondante pour la sélection.
         * - Attache un gestionnaire d’événement au bouton de validation.
         * 
         * Lors de la soumission :
         * - Récupère et stocke la valeur et le libellé du niveau sélectionné.
         * - Affiche un message de confirmation avec le niveau choisi.
         * - Passe à l’étape suivante (soft skills).
         * 
         * @function askNiveau
         * @returns {void} Cette fonction ne retourne rien.
         */
        function askNiveau()
        {
            sessionStorage.setItem('currentStepFormation', 'niveauQuestion');
            setTimeout(() => {
                remplirListeNiveau();
                afficherZone('list1');

                showMessageFormation(messageInnerFormation, "Quel niveau d'étude possèdes-tu ?", 'bot');

                validateBtnFormation1.addEventListener('click', handleNiveauSubmit);
                function handleNiveauSubmit()
                {
                    const selectedOption =  jobSelectFormation.options[jobSelectFormation.selectedIndex];
                    const selectedValue =   selectedOption.value;
                    const selectedText =    selectedOption.textContent;

                    if (selectedValue)
                    {
                        setTimeout(() =>
                        {
                            showMessageFormation(messageInnerFormation, selectedText, 'user');
                            sessionStorage.setItem('userNiveau', selectedValue);
                        }, 150);
                        setTimeout(() =>
                        {
                            softSkillsCalculated();
                        }, 200);
                    }
                } 
            }, 200);
        }


        /**
         * Calcule et filtre les formations correspondant aux réponses utilisateur et au niveau.
         * 
         * Étapes réalisées par cette fonction :
         * 1. Récupère les réponses aux soft skills et le niveau de formation de l’utilisateur depuis le `sessionStorage`.
         * 2. Filtre les formations disponibles pour ne garder que celles dont le niveau est inférieur ou égal à celui de l’utilisateur.
         * 3. Calcule un score de correspondance pour chaque formation, en comparant les aptitudes positives de l’utilisateur avec celles requises par la formation.
         * 4. Trie les formations par score décroissant et sélectionne les 3 meilleures correspondances.
         * 5. Stocke cette sélection dans le `sessionStorage` sous la clé `formationConseil`.
         * 6. Lance l’affichage des formations filtrées et triées via la fonction `softSkillsAffichage`.
         * 
         * @function softSkillsCalculated
         * @returns {void} Cette fonction ne retourne rien.
         */
        function softSkillsCalculated()
        {
            afficherZone('');

            const reponsesFinales =             JSON.parse(sessionStorage.getItem('reponseUserSoftSkills') || '[]');
            const donneesFormation =            window.listeFormationsSite;
            const userLevel =                   parseInt(sessionStorage.getItem('userNiveau'), 10);
            
            const formationsFiltreesParNiveau = donneesFormation.filter(formation => {
                return formation.niveau <= userLevel;
            });
            
            const formationsAvecScore =         formationsFiltreesParNiveau.map(formation => {
                let score = 0;

                reponsesFinales.forEach(({ aptitude, reponse }) => {
                    if (reponse === true && formation[aptitude] === true)
                    {
                        score++;
                    }
                });

                return { ...formation, score: score };
            });

            const formationsTrieesParScore =    formationsAvecScore.sort((a, b) => b.score - a.score);

            const top3Formations =              formationsTrieesParScore.slice(0, 3);
            sessionStorage.setItem('formationConseil', JSON.stringify(top3Formations));

            softSkillsAffichage();
        }


        /**
         * Gère l'affichage des formations correspondant aux compétences de l'utilisateur.
         * 
         * Cette fonction :
         * - Met à jour l'étape actuelle dans le sessionStorage.
         * - Remplit la liste des formations adaptées avec `remplirListeFormation`.
         * - Affiche la zone de sélection des formations (zone 'list2').
         * - Affiche des messages d'introduction pour guider l'utilisateur.
         * - Ajoute un gestionnaire d'événement au bouton de validation pour la sélection d'un métier.
         * - Lorsque l'utilisateur valide une sélection, affiche le métier choisi,
         *   récupère le lien de la fiche métier correspondante,
         *   puis appelle la fonction `ConsultJobSheetFormationCorrespondant` avec ce lien.
         *
         * @function softSkillsAffichage
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function softSkillsAffichage()
        {
            sessionStorage.setItem('currentStepFormation', 'AffichageFormationsCorrespondant');

            setTimeout(() =>
            {
                remplirListeFormation();
            }, 50);

            afficherZone('list2');

            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Voici les formations qui te correspondent le mieux selon tes réponses", 'bot');
            }, 150);
            setTimeout(() =>
            {
                showMessageFormation(messageInnerFormation, "Quelle formation souhaites-tu voir ?", 'bot');
            }, 250);

            validateBtnFormation2.addEventListener('click', handleMetierCorrespondantChoice);
            function handleMetierCorrespondantChoice()
            {
                const selectedValue =   jobSelectFormation.value;

                if (selectedValue)
                {
                    const selectedName =    window.listeFormationsSite.findIndex(formation => formation.nom === selectedValue);
                    showMessageFormation(messageInnerFormation, selectedValue, 'user');
                    
                    const jobLink =         window.listeFormationsSite[selectedName].lien;

                    validateBtnFormation2.removeEventListener('click', handleMetierCorrespondantChoice);

                    setTimeout(() =>
                    {
                        ConsultJobSheetFormationCorrespondant(jobLink);
                    }, 350);
                }
            } 
        }


        /**
         * Gère l'affichage de la fiche métier correspondante après un court délai,
         * puis termine la conversation liée à la formation.
         * 
         * @function ConsultJobSheetFormationCorrespondant
         * @param {string} jobLink - Le lien ou identifiant de la fiche métier à afficher.
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function ConsultJobSheetFormationCorrespondant(jobLink)
        {
            setTimeout(() =>
            {
                showFicheMetier(messageInnerFormation, jobLink);
            }, 100);

            setTimeout(() =>
            {
                endChatFormation();
            }, 200);
        }


        /**
         * Active ou désactive les boutons de réponse (Oui/Non) lors des questions de formation.
         *
         * Cette fonction permet de contrôler l'état d'interaction des boutons
         * pour éviter des réponses multiples ou prématurées.
         *
         * @function handleButtonsFormation
         * @param {boolean} state - Si `true`, les boutons sont activés ; si `false`, ils sont désactivés.
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function handleButtonsFormation(state)
        {
            btnOuiFormation.disabled = !state;
            btnNonFormation.disabled = !state;
        }


        /**
         * Sauvegarde un message ou un lien dans l'historique de la conversation dans le sessionStorage.
         * 
         * Cette fonction gère l'ajout d'un message ou d'un lien dans l'historique des messages de la conversation,
         * stocké dans le `sessionStorage`. Si le dernier message dans l'historique est identique au message que
         * l'on souhaite ajouter, celui-ci est supprimé pour éviter les doublons. Le message peut être un texte (message)
         * ou un lien (fiche métier), et il est associé à un expéditeur (utilisateur ou bot).
         *
         * @function saveMessageToSessionStorageFormation
         * @param {string} message - Le contenu du message ou du lien à sauvegarder.
         * @param {string} sender - L'expéditeur du message ('user' ou 'bot').
         * @param {string} [type="message"] - Le type de contenu (par défaut "message", peut être "link" pour un lien).
         * 
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function saveMessageToSessionStorageFormation(message, sender, type = 'message')
        {
            let chatHistoryFormation = JSON.parse(sessionStorage.getItem('chatHistoryFormation')) || [];
        
            if (sender === 'bot')
            {
                const messageExists =   chatHistoryFormation.some(chat => chat.sender === 'bot' && chat.content === message);
                if (messageExists)
                {
                    return;
                }
            }
        
            if (chatHistoryFormation.length > 0 && chatHistoryFormation[chatHistoryFormation.length - 1].content === message && chatHistoryFormation[chatHistoryFormation.length - 1].sender === sender)
            {
                chatHistoryFormation.pop();
            }
        
            chatHistoryFormation.push(
            {
                type: type,
                content: message,
                sender: sender
            });
        
            sessionStorage.setItem('chatHistoryFormation', JSON.stringify(chatHistoryFormation));
        }


        /**
         * Affiche la zone d'entrée appropriée en fonction du type spécifié.
         * 
         * Cette fonction gère l'affichage dynamique des différentes zones d'interaction utilisateur 
         * dans l'interface de la page de formation. Selon le type passé en paramètre, elle affiche 
         * soit un champ de texte, une barre de sélection, des boutons, une liste déroulante, ou un message 
         * de fin de conversation. Elle masque toutes les autres zones pour garantir une interface propre 
         * et cohérente à chaque étape de la conversation.
         *
         * @function afficherZone
         * @param {string} type - Le type de zone à afficher. Les valeurs possibles sont :
         *   - 'text' : Affiche une zone de saisie texte.
         *   - 'range' : Affiche une zone de sélection par curseur (range).
         *   - 'buttons' : Affiche des boutons de choix.
         *   - 'list1' : Affiche une liste déroulante avec options (bouton de validation 1).
         *   - 'list2' : Affiche une liste déroulante avec options (bouton de validation 2).
         *   - 'finish' : Affiche la zone de fin de conversation.
         *   - 'returnChoice' : Affiche la zone de choix de retour.
         *   - '' : N'affiche aucun input.
         * 
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function afficherZone(type)
        {
            texteZoneFormation.style.display =          'none';
            rangeZoneFormation.style.display =          'none';
            buttonsZoneFormation.style.display =        'none';
            selectZoneFormation.style.display =         'none';
            finishZoneFormation.style.display =         'none';
            choiceZoneFormation.style.display =         'none';

            validateBtnFormation1.style.display =       'none';
            validateBtnFormation2.style.display =       'none';

            if (type === 'text')
            {
                texteZoneFormation.style.display =      'block';
                validateBtnFormation1.style.display =   'block';
            }
            else if (type === 'range')
            {
                rangeZoneFormation.style.display =      'block';
                validateBtnFormation1.style.display =   'block';
            }
            else if (type === 'buttons')
            {
                buttonsZoneFormation.style.display =    'flex';
            }
            else if (type === 'list1')
            {
                selectZoneFormation.style.display =     'block';
                validateBtnFormation1.style.display =   'block';
            }
            else if (type === 'list2')
            {
                selectZoneFormation.style.display =     'block';
                validateBtnFormation2.style.display =   'block';
            }
            else if (type === 'finish')
            {
                finishZoneFormation.style.display =     'block';
            }
            else if (type === 'returnChoice')
            {
                choiceZoneFormation.style.display =     'flex';

                returnChoiceZoneFormation.disabled =    false;
                returnCritere.disabled =                false;
            }
            else
            {
                return;
            }
        }


        /**
         * Remplit dynamiquement la liste déroulante des métiers à partir d'un fichier JSON distant.
         *
         * Cette fonction :
         * - Vide la liste actuelle dans le `<select>` `jobSelectFormation`.
         * - Récupère les données de formations depuis un fichier JSON hébergé sur GitHub.
         * - Stocke les données dans `window.listeFormationsSite`.
         * - Génère une option pour chaque métier et l'ajoute à la liste déroulante.
         * 
         * En cas d'erreur de chargement (connexion, URL, etc.), affiche une option signalant un problème.
         *
         * @function remplirListeMetiers
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function remplirListeMetiers()
        {
            jobSelectFormation.innerHTML = "";
            const url = "https://raw.githubusercontent.com/Alec34pi/dataFormations/ma-premiere-branche/donnéesFormations.json";

            fetch(url)
                .then(response =>
                {
                    if (!response.ok) throw new Error("Erreur de chargement, vérifie ta connexion internet");
                    return response.json();
                })
                .then(data =>
                {
                    window.listeFormationsSite =    data;

                    jobSelectFormation.innerHTML =  '<option value="" disabled selected>Choisis un métier...</option>';

                    window.listeFormationsSite.forEach(formation => {
                        const option =          document.createElement("option");
                        option.value =          formation.nom;
                        option.textContent =    formation.nom;
                        jobSelectFormation.appendChild(option);
                    });
                })
                .catch(error =>
                {
                    jobSelectFormation.innerHTML =  '<option value="probleme">problème</option>';
                });
        }


        /**
         * Remplit la liste déroulante des formations à partir des données stockées
         * dans le sessionStorage sous la clé 'formationConseil'.
         * Gère les cas d'absence de données, d'erreurs de parsing,
         * ou de liste vide, en affichant des messages adaptés dans le select.
         *
         * @function remplirListeFormation
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function remplirListeFormation() {
            jobSelectFormation.innerHTML = "";

            const dataJSON = sessionStorage.getItem('formationConseil');

            if (!dataJSON) {
                jobSelectFormation.innerHTML = '<option value="vide" disabled selected>Aucune donnée disponible</option>';
                return;
            }

            let listeFormations;
            try {
                listeFormations = JSON.parse(dataJSON);
            } catch (e) {
                jobSelectFormation.innerHTML = '<option value="erreur" disabled selected>Erreur de données</option>';
                return;
            }

            if (!Array.isArray(listeFormations) || listeFormations.length === 0) {
                jobSelectFormation.innerHTML = '<option value="vide" disabled selected>Aucune formation trouvée</option>';
                return;
            }

            jobSelectFormation.innerHTML = '<option value="" disabled selected>Choisis un métier...</option>';

            listeFormations.forEach(formation => {
                if (formation && formation.nom) {
                    const option =          document.createElement("option");
                    option.value =          formation.nom;
                    option.textContent =    formation.nom;
                    jobSelectFormation.appendChild(option);
                }
            });
        }


        /**
         * Remplit dynamiquement la liste déroulante des niveaux de formation.
         *
         * Cette fonction :
         * - Vide les options existantes dans le `<select>` `jobSelectFormation`.
         * - Crée une liste de niveaux d'études avec leurs valeurs et libellés.
         * - Ajoute une option par défaut ("Choisis un niveau...") désactivée et présélectionnée.
         * - Ajoute chaque niveau comme option sélectionnable dans la liste.
         *
         * @function remplirListeNiveau
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function remplirListeNiveau()
        {
            jobSelectFormation.innerHTML = "";

            let niveau = 
            [
                {
                    value: 3,
                    text: "CAP, BEP",
                },
                {
                    value: 4,
                    text: "Bac",
                },
                {
                    value: 5,
                    text: "Bac +2",
                },
                {
                    value: 6,
                    text: "Bac +3 ou Bac +4",
                },
                {
                    value: 7,
                    text: "Bac +5",
                },
            ];

            const defaultOption = document.createElement("option");
            defaultOption.value =       "";
            defaultOption.disabled =    true;
            defaultOption.selected =    true;
            defaultOption.textContent = "Choisis un niveau...";
            jobSelectFormation.appendChild(defaultOption);

            niveau.forEach(n => {
                const option =          document.createElement("option");
                option.value =          n.value;
                option.textContent =    n.text;
                jobSelectFormation.appendChild(option);
            });
        }


        /**
         * Met à jour la valeur affichée du champ de saisie de type range en temps réel.
         * 
         * Cette fonction écoute l'événement 'input' sur le champ de saisie `rangeInputFormation` 
         * (type `range`), et chaque fois que l'utilisateur interagit avec le curseur, la valeur 
         * de `rangeInputFormation` est récupérée et affichée dans l'élément `rangeValueFormation` 
         * avec le symbole "%" ajouté.
         * 
         * @returns {void} - Cette fonction ne retourne rien, elle met à jour directement le contenu
         *                   de l'élément `rangeValueFormation` à chaque modification de la valeur du range.
         */
        rangeInputFormation.addEventListener('input', () =>
        {
            rangeValueFormation.textContent = `${rangeInputFormation.value}%`;
        });


        /**
         * Affiche un message dans la zone de conversation.
         * 
         * Cette fonction crée un élément de message et l'ajoute à un conteneur spécifié. Le message peut être envoyé
         * par l'utilisateur ou le bot. Selon l'expéditeur, le message est stylisé de manière différente. La fonction
         * permet également de sauvegarder l'historique des messages dans le `sessionStorage` et de faire défiler
         * la zone de message vers le bas si nécessaire.
         *
         * @function showMessageFormation
         * 
         * @param {HTMLElement} container - Le conteneur HTML où le message sera affiché.
         * @param {string} message - Le texte du message à afficher.
         * @param {string} [sender='bot'] - L'expéditeur du message ('user' ou 'bot'). Par défaut, c'est 'bot'.
         * @param {boolean} [saveHistory=true] - Indique si le message doit être sauvegardé dans l'historique de la session. Par défaut, c'est `true`.
         * 
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function showMessageFormation(container, message, sender = 'bot', saveHistory = true)
        {
            if (sender === 'bot' && container.innerHTML.includes(message))
            {
                return;
            }

            const messageDiv =          document.createElement('div');
            messageDiv.textContent =    message;
            messageDiv.classList.add('uk-chat-message-formation-chatbot');
            
            if (sender === 'user')
            {
                messageDiv.classList.add('uk-user-message-formation-chatbot');
            }
            else
            {
                messageDiv.classList.add('uk-bot-message-formation-chatbot');
            }
            container.appendChild(messageDiv);

            if (saveHistory)
            {
                saveMessageToSessionStorageFormation(message, sender, 'message');
            }

            movement = container.scrollHeight
            messageInnerFormation .scrollTop = movement;
        }


        /**
         * Affiche un lien vers une fiche métier dans la zone de conversation.
         * 
         * Cette fonction crée un élément de lien HTML pointant vers la fiche métier spécifiée, puis l'ajoute au conteneur
         * passé en paramètre. Le lien est ouvert dans un nouvel onglet. Elle permet également de sauvegarder l'URL du lien
         * dans l'historique de la session et de faire défiler la conversation vers le bas si nécessaire.
         *
         * @function showFicheMetier
         * 
         * @param {HTMLElement} container - Le conteneur HTML où le lien sera affiché.
         * @param {string} link - L'URL de la fiche métier à afficher.
         * @param {boolean} [saveHistory=true] - Indique si l'URL du lien doit être sauvegardée dans l'historique de la session. Par défaut, c'est `true`.
         * 
         * @returns {void} - Cette fonction ne retourne rien.
         */
        function showFicheMetier(container, link, saveHistory = true)
        {
            const linkDiv =         document.createElement('a');
            linkDiv.textContent =   "Fiche métier";
            linkDiv.href =          link;
            linkDiv.classList.add('uk-linkDiv-formation-chatbot');

            container.appendChild(linkDiv);

            if (saveHistory)
            {
                saveMessageToSessionStorageFormation(link, 'bot', 'link');
            }
            
            if (container.style.display === 'block')
            {
                container.scrollTo({
                    top: container.scrollHeight
                });
            }

            if (!linkHistory.includes(link)) {
                linkHistory.push(link);
                sessionStorage.setItem('linkHistory', JSON.stringify(linkHistory));

                window.location.href = link;
            }
        }


        /**
         * Fonction de retour à l'accueil.
         * 
         * Cette fonction est déclenchée lorsque l'utilisateur clique sur le bouton `backBtnFormation`.
         * Elle cache la page de formation, affiche la page d'initialisation et réinitialise la zone de messages.
         * 
         * @function retourAccueil
         * @returns {void} - Cette fonction ne retourne rien.
         */
        backBtnFormation.addEventListener('click', retourAccueil);
        function retourAccueil()
        {
            formationPage.style.display =   'none';
            initPage.style.display =        'flex';

            messageInnerFormation.innerHTML = '';
        }


        /**
         * Fonction de réinitialisation du chat.
         * 
         * Cette fonction est déclenchée lorsque l'utilisateur clique sur le bouton de réinitialisation `resetBtnFormation`
         * ou lorsque l'utilisateur termine le chat via le bouton `finishBtnFormation`.
         * Elle efface le contenu des messages, vide la session de l'utilisateur,
         * et redémarre le chat en appelant `trouverFormation`.
         * 
         * @function resetChat
         * @returns {void} - Cette fonction ne retourne rien.
         */
        resetBtnFormation.addEventListener('click', resetChat);
        finishBtnFormation.addEventListener('click', resetChat);
        function resetChat()
        {
            messageInnerFormation.innerHTML = '';
            
            sessionStorage.removeItem('userName');

            sessionStorage.removeItem('experience');

            sessionStorage.removeItem('currentStepFormation');
            sessionStorage.removeItem('chatHistoryFormation');

            sessionStorage.removeItem('currentStepSoftSkills');
            sessionStorage.removeItem('reponseUserSoftSkills');
            sessionStorage.removeItem('userNiveau');

            sessionStorage.removeItem('formationConseil');

            sessionStorage.removeItem('linkHistory');

            trouverFormation();
        }


        /**
         * Gère le retour à l'étape de sélection des compétences.
         * Réinitialise les messages, les données de session liées aux soft skills
         * et relance le processus de questions depuis le début.
         * 
         * @function returnCritereFormation
         * @returns {void} - Cette fonction ne retourne rien.
         */
        returnCritere.addEventListener('click', returnCritereFormation);
        function returnCritereFormation()
        {
            messageInnerFormation.innerHTML = '';
            sessionStorage.removeItem('chatHistoryFormation');
            showMessageFormation(messageInnerFormation, "retourner aux choix des compétences", 'user');

            sessionStorage.removeItem('currentStepSoftSkills');
            currentStepSoftSkills = 0;

            sessionStorage.removeItem('reponseUserSoftSkills');
            sessionStorage.removeItem('userNiveau');

            sessionStorage.removeItem('formationConseil');
            
            sessionStorage.removeItem('linkHistory');

            softSkillsQuestion(currentStepSoftSkills);
        }

        
        /**
         * Gère le retour à la liste des formations depuis une zone spécifique.
         * Efface les messages précédents, réinitialise l'historique de session,
         * affiche un message utilisateur, et relance l'affichage des soft skills.
         * 
         * 
         * @function returnChoiceFormation
         * @returns {void} - Cette fonction ne retourne rien.
         */
        returnChoiceZoneFormation.addEventListener('click', returnChoiceFormation)
        function returnChoiceFormation()
        {
            messageInnerFormation.innerHTML = '';
            
            sessionStorage.removeItem('linkHistory');

            sessionStorage.removeItem('chatHistoryFormation');
            showMessageFormation(messageInnerFormation, "retourner à la liste des formations", 'user');
            softSkillsAffichage();
        }
    }





/**
 * 
 * 
 * 
 * 
 * 
 * ------------
 * 
 * 
 * 
 * 
 * 
 */





    siteBtn.addEventListener('click', chercherSite)
    function chercherSite()
    {
        initPage.style.display =    'none';
        sitePage.style.display =    'block';

        let currentStepSite =       sessionStorage.getItem('currentStepSite') || 'start';
        let chatHistorySite =       JSON.parse(sessionStorage.getItem('chatHistorySite')) || [];

        let listThematiques =
        [
            {
                value: 1,
                text: "Découvrir notre identité (nous connaître)",
                lien: ""
            },
            {
                value: 2,
                text: "Nos projets inclusifs",
                lien: ""
            },
            {
                value: 3,
                text: "Nos établissements et leurs liens à l'international",
                lien: ""
            },
            {
                value: 4,
                text: "Nos formations",
                lien: ""
            },
            {
                value: 5,
                text: "La recherche",
                lien: "https://www.faire-ess.fr/fr/recherche"
            },
            {
                value: 6,
                text: "Les ressources",
                lien: ""
            },
            {
                value: 7,
                text: "Accéder à nos contacts",
                lien: "https://www.faire-ess.fr/fr/contact"
            }
        ];

        let listIdentité =
        [
            {
                value: 2,
                text: "Faire ESS",
                lien: "https://www.faire-ess.fr/fr/nous-connaitre/faire-ess"
            },
            {
                value: 3,
                text: "IRTS Access",
                lien: "https://www.faire-ess.fr/fr/nous-connaitre/iats"
            },
            {
                value: 4,
                text: "IRTS Montpellier",
                lien: "https://www.faire-ess.fr/fr/nous-connaitre/irts-montpellier"
            },
            {
                value: 5,
                text: "IRTS Perpignan",
                lien: "https://www.faire-ess.fr/fr/nous-connaitre/irts-perpignan"
            }
        ];

        let listInclusif =
        [
            {
                value: 1,
                text: "Emploi Accompagné",
                lien: "https://www.faire-ess.fr/fr/dispositifs-inclusifs/emploi-accompagne"
            },
            {
                value: 2,
                text: "Mission Handicap",
                lien: "https://www.faire-ess.fr/fr/dispositifs-inclusifs/mission-handicap"
            },
            {
                value: 3,
                text: "OASISS Handicap",
                lien: "https://www.faire-ess.fr/fr/dispositifs-inclusifs/oasis-handicap"
            },
            {
                value: 4,
                text: "Synergie Handicap",
                lien: "https://www.faire-ess.fr/fr/dispositifs-inclusifs/synergie-handicap-sup"
            }
        ];

        let listEtablissement =
        [
            {
                value: 1,
                text: "Stratégie internationale",
                lien: "https://www.faire-ess.fr/fr/international/strategie-internationale"
            },
            {
                value: 2,
                text: "Mobilités internationales",
                lien: "https://www.faire-ess.fr/fr/international/mobilites-internationales"
            },
            {
                value: 3,
                text: "Accueil international",
                lien: "https://www.faire-ess.fr/fr/international/accueil-international"
            },
            {
                value: 4,
                text: "Projets Européens",
                lien: "https://www.faire-ess.fr/fr/international/projets-europeens"
            },
            {
                value: 5,
                text: "Partenariats et réseaux",
                lien: "https://www.faire-ess.fr/fr/international/partenariats-et-reseaux"
            }
        ];

        let listeSiteFormations =
        [
            {
                value: 1,
                text: "Toutes nos formations",
                lien: "https://www.faire-ess.fr/fr/se-former/formations-diplomantes-et-certifiantes"
            },
            {
                value: 2,
                text: "L'apprentissage",
                lien: "https://www.faire-ess.fr/fr/se-former/apprentissage"
            },
            {
                value: 3,
                text: "La formation continue",
                lien: "https://www.faire-ess.fr/fr/se-former/formation-continue-vae"
            },
            {
                value: 4,
                text: "La VAE",
                lien: "https://www.faire-ess.fr/fr/se-former/le-service-vae"
            }
        ];

        let listRessource =
        [
            {
                value: 1,
                text: "ABS Faire",
                lien: "https://www.faire-ess.fr/fr/ressources-recherche/abcfaire"
            },
            {
                value: 2,
                text: "Pôle Ressource en Développement Social",
                lien: "https://www.faire-ess.fr/fr/ressources-recherche/prds"
            },
            {
                value: 3,
                text: "Centre de Ressource Documentaire",
                lien: "https://www.faire-ess.fr/fr/ressources-recherche/crd"
            }
        ];

        if (chatHistorySite.length > 2)
        {
            afficherZone('');
            chatHistorySite.pop();
            chatHistorySite.forEach(item =>
            {
                if (item.type === 'message')
                {
                    showMessageSiteHistorique(messageInnerSite, item.content, item.sender, false);
                } else if (item.type === 'link')
                {
                    showWebPageHistorique(messageInnerSite, item.link, item.content, false);
                }
            });

            switch (currentStepSite)
            {
                case 'start' :
                    start();
                    break;

                case 'decouvert' :
                    decouvert();
                    break;
                case 'decouvertFinish' :
                    decouvertFinish(sessionStorage.getItem('identite'));
                    break;

                case 'inclusif' :
                    inclusif();
                case 'inclusifFinish' :
                    inclusifFinish(sessionStorage.getItem('inclusif'));
                    break;

                case 'international' :
                    international();
                    break;
                case 'internationalFinish' :
                    internationalFinish(sessionStorage.getItem('international'));
                    break;

                case 'formations' :
                    formations();
                    break;
                case 'formationFinish' :
                    formationFinish(sessionStorage.getItem('formations'));
                    break;

                case 'ressources' :
                    resources();
                    break;
                case 'ressourcesFinish' :
                    resourcesFinish(sessionStorage.getItem('ressources'));
                    break;

                case 'recherche' :
                    recherche();
                    break;

                case 'contact' :
                    contact();
                    break;

                case 'end':
                    endChat();
                    break;
            }
        }
        else
        { 
            afficherZone('');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "👋 Bonjour et bienvenue !", 'bot');
            }, 100);

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Je suis là pour t'aider à t'orienter sur le site. Prêt(e) à commencer ?", 'bot');
            }, 200);
            start();
        }


        /**
         * Initialise le début de l’interaction sur le site et gère la sélection de thématique.
         * 
         * Cette fonction affiche un message d’introduction invitant l’utilisateur à choisir une
         * thématique, remplit la liste déroulante correspondante, puis affiche cette liste.
         * Elle enregistre l’étape actuelle dans le `sessionStorage`.
         * 
         * Un écouteur est ajouté au bouton `validateBtnSite` pour traiter la sélection de
         * l’utilisateur : si une thématique est choisie, elle est affichée dans la conversation
         * et la fonction `handleStart` est appelée avec la valeur correspondante.
         * 
         * @function start
         * @returns {void} Cette fonction ne retourne rien.
         */
        function start()
        {
            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Choisissez une thématique en cliquant sur 'Choisir une thématique...'", 'bot');
            }, 250);
            
            remplirListOption('thematique');
            afficherZone('list');

            sessionStorage.setItem('currentStepSite', 'start');

            validateBtnSite.addEventListener('click', handleTehmatiqueSubmit, { once: true });
            function handleTehmatiqueSubmit()
            {
                const selectedValue =       parseInt(jobSelectSite.value);
                const selectedThematique =  listThematiques.find(item => item.value === selectedValue);

                if (selectedValue)
                {
                    showMessageSite(messageInnerSite, selectedThematique.text, 'user');
                    handleStart(selectedValue);
                }
            }
        }


        /**
         * Redirige l’utilisateur vers la fonction correspondant à la thématique choisie.
         * 
         * Cette fonction reçoit en paramètre une valeur numérique représentant une thématique.
         * Selon cette valeur (de 1 à 7), elle appelle la fonction appropriée pour lancer
         * le contenu correspondant :
         *   - 1 : `decouvert()`
         *   - 2 : `inclusif()`
         *   - 3 : `international()`
         *   - 4 : `formations()`
         *   - 5 : `recherche()`
         *   - 6 : `resources()`
         *   - 7 : `contact()`
         * 
         * @function handleStart
         * @param {number} value - La valeur numérique correspondant à la thématique choisie.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function handleStart(value)
        {
            switch (value)
            {
                case 1 :
                    decouvert();
                    break;

                case 2:
                    inclusif();
                    break;

                case 3:
                    international();
                    break;

                case 4:
                    formations();
                    break;

                case 5:
                    recherche();
                    break;

                case 6:
                    resources();
                    break;

                case 7:
                    contact();
                    break;
            }
        }


        /**
         * Lance l’étape de découverte de l’identité de l’établissement.
         * 
         * Cette fonction prépare la sélection d’une sous-thématique liée à l’identité :
         *   - Remplit la liste déroulante avec les options d’identité (`'identité'`).
         *   - Affiche la zone de sélection.
         *   - Enregistre l’étape actuelle (`'decouvert'`) dans le `sessionStorage`.
         *   - Affiche un message utilisateur indiquant la section en cours.
         *   - Affiche ensuite un message du bot pour guider l’utilisateur.
         * 
         * Un écouteur est ajouté au bouton `validateBtnSite` :
         *   - Récupère la valeur sélectionnée dans la liste.
         *   - Affiche le texte correspondant dans la conversation utilisateur.
         *   - Appelle `decouvertFinish()` avec la thématique sélectionnée.
         * 
         * @function decouvert
         * @returns {void} Cette fonction ne retourne rien.
         */
        function decouvert()
        {
            remplirListOption('identité');
            afficherZone('list');

            sessionStorage.setItem('currentStepSite', 'decouvert');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Découvrir notre identité (nous connaître)", 'user');
            }, 250);
            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Choisissez une thématique liée à notre identité en cliquant sur 'Choisir une thématique...'", 'bot');
            }, 400);
            validateBtnSite.addEventListener('click', handleDecouvertSubmit, { once: true });
            function handleDecouvertSubmit()
            {
                const selectedValue =       parseInt(jobSelectSite.value);
                const selectedIdentite =    listIdentité.find(item => item.value === selectedValue);

                if (selectedIdentite)
                {
                    showMessageSite(messageInnerSite, selectedIdentite.text, 'user');
                    decouvertFinish(selectedIdentite);
                }
            }
        }


        /**
         * Finalise l’étape de découverte en affichant la page liée à l’identité sélectionnée.
         * 
         * Cette fonction :
         *   - Affiche la zone de fin (`'finish'`).
         *   - Enregistre l’étape courante (`'decouvertFinish'`) et l'identité choisie dans le `sessionStorage`.
         *   - Affiche un message du bot pour introduire la page.
         *   - Affiche ensuite la page web correspondant à la thématique choisie via `showWebPage`.
         *   - Termine le processus en appelant `finishSite`.
         * 
         * @function decouvertFinish
         * @param {Object} selectedIdentite - L’objet représentant l’identité sélectionnée (contenant au moins `value`, `text`, et `lien`).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function decouvertFinish(selectedIdentite)
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepSite', 'decouvertFinish');
            sessionStorage.setItem('identite', selectedIdentite.value);

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Voici la page demandée :", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showWebPage(messageInnerSite, selectedIdentite.lien, selectedIdentite.text, 'user');
            }, 400);
            setTimeout(() =>
            {
                finishSite();
            }, 550);
        }


        /**
         * Démarre l’étape de sélection des projets inclusifs.
         * 
         * Cette fonction :
         *  - Remplit la liste déroulante avec les options liées aux projets inclusifs.
         *  - Affiche la zone de sélection.
         *  - Enregistre l’étape courante ('inclusif') dans le `sessionStorage`.
         *  - Affiche un message du bot pour guider l’utilisateur dans son choix.
         *  - Ajoute un écouteur au bouton de validation pour traiter la sélection :
         *      - Récupère la thématique sélectionnée.
         *      - Affiche la thématique choisie dans la conversation.
         *      - Appelle la fonction `inclusifFinish` avec l’élément sélectionné.
         * 
         * @function inclusif
         * @returns {void} Cette fonction ne retourne rien.
         */
        function inclusif()
        {
            remplirListOption('inclusif');
            afficherZone('list');

            sessionStorage.setItem('currentStepSite', 'inclusif');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Sélectionnez une thématique autour de nos projets inclusifs en cliquant sur 'Choisir une thématique...', puis validez.", 'bot');
            }, 250);

            validateBtnSite.addEventListener('click', handleInclusifSubmit, { once: true });
            function handleInclusifSubmit()
            {
                const selectedValue =       parseInt(jobSelectSite.value);
                const selectedInclusif =    listInclusif.find(item => item.value === selectedValue);

                if (selectedInclusif)
                {
                    showMessageSite(messageInnerSite, selectedInclusif.text, 'user');
                    inclusifFinish(selectedInclusif);
                }
            }
        }


        /**
         * Termine l’étape des projets inclusifs en affichant la page sélectionnée.
         * 
         * Cette fonction :
         *  - Affiche la zone de fin (`'finish'`).
         *  - Enregistre l’étape courante (`'inclusifFinish'`) et la sélection de l’utilisateur dans le `sessionStorage`.
         *  - Affiche un message du bot pour introduire la page web.
         *  - Affiche la page web correspondant à la thématique sélectionnée via `showWebPage`.
         *  - Appelle `finishSite` pour finaliser le processus.
         * 
         * @function inclusifFinish
         * @param {Object} selectedInclusif - L’objet représentant la thématique inclusive sélectionnée (avec `value`, `text`, `lien`).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function inclusifFinish(selectedInclusif)
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepSite', 'inclusifFinish');
            sessionStorage.setItem('inclusif', selectedInclusif.value);

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Voici la page demandée :", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showWebPage(messageInnerSite, selectedInclusif.lien, selectedInclusif.text, 'user');
            }, 400);
            setTimeout(() =>
            {
                finishSite();
            }, 550);
        }

        
        /**
         * Démarre l’étape de sélection des établissements et leur ouverture internationale.
         * 
         * Cette fonction :
         *  - Remplit la liste déroulante avec les options d’établissements.
         *  - Affiche la zone de sélection.
         *  - Enregistre l’étape actuelle ('international') dans le `sessionStorage`.
         *  - Affiche un message du bot pour guider l’utilisateur dans son choix.
         *  - Ajoute un écouteur au bouton de validation pour gérer la sélection :
         *      - Récupère la valeur choisie.
         *      - Affiche la thématique sélectionnée dans la conversation.
         *      - Appelle la fonction `internationalFinish` avec la sélection.
         * 
         * @function international
         * @returns {void} Cette fonction ne retourne rien.
         */
        function international()
        {
            remplirListOption('etablissement');
            afficherZone('list');

            sessionStorage.setItem('currentStepSite', 'international');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Explorez nos établissements et leur ouverture à l'international en cliquant sur 'Choisir une thématique...', puis validez.", 'bot');
            }, 250);

            validateBtnSite.addEventListener('click', handleInternationalSubmit, { once: true });
            function handleInternationalSubmit()
            {
                const selectedValue =           parseInt(jobSelectSite.value);
                const selectedInternational =   listEtablissement.find(item => item.value === selectedValue);

                if (selectedInternational)
                {
                    showMessageSite(messageInnerSite, selectedInternational.text, 'user');
                    internationalFinish(selectedInternational);
                }
            }
        }


        /**
         * Finalise l’étape des établissements internationaux en affichant la page sélectionnée.
         * 
         * Cette fonction :
         *  - Affiche la zone de fin (`'finish'`).
         *  - Enregistre l’étape courante (`'internationalFinish'`) et la sélection dans le `sessionStorage`.
         *  - Affiche un message du bot pour introduire la page.
         *  - Affiche la page web correspondant à la sélection via `showWebPage`.
         *  - Appelle `finishSite` pour conclure le processus.
         * 
         * @function internationalFinish
         * @param {Object} selectedInternational - L’objet représentant l’établissement sélectionné (avec `value`, `text`, `lien`).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function internationalFinish(selectedInternational)
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepSite', 'internationalFinish');
            sessionStorage.setItem('international', selectedInternational.value);

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Voici la page demandée :", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showWebPage(messageInnerSite, selectedInternational.lien, selectedInternational.text, 'user');
            }, 400);
            setTimeout(() =>
            {
                finishSite();
            }, 550);
        }


        /**
         * Lance l’étape de sélection des types de formations proposées.
         * 
         * Cette fonction :
         *  - Remplit la liste déroulante avec les options de formations.
         *  - Affiche la zone de sélection.
         *  - Enregistre l’étape actuelle ('formations') dans le `sessionStorage`.
         *  - Affiche un message du bot invitant l’utilisateur à choisir une formation.
         *  - Ajoute un écouteur sur le bouton de validation pour gérer la sélection :
         *      - Récupère la valeur choisie.
         *      - Affiche la formation sélectionnée dans la conversation.
         *      - Appelle la fonction `formationFinish` avec la sélection.
         * 
         * @function formations
         * @returns {void} Cette fonction ne retourne rien.
         */
        function formations()
        {
            remplirListOption('formations');
            afficherZone('list');

            sessionStorage.setItem('currentStepSite', 'formations');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Découvrez nos types de formations : cliquez sur 'Choisir une thématique…', puis validez", 'bot');
            }, 250);

            validateBtnSite.addEventListener('click', handleFormationSubmit, { once: true });
            function handleFormationSubmit()
            {
                const selectedValue =       parseInt(jobSelectSite.value);
                const selectedFormation =   listeSiteFormations.find(item => item.value === selectedValue);

                if (selectedFormation)
                {
                    showMessageSite(messageInnerSite, selectedFormation.text, 'user');
                    formationFinish(selectedFormation);
                }
            }
        }


        /**
         * Conclut l’étape de sélection des formations en affichant la page correspondante.
         * 
         * Cette fonction :
         *  - Affiche la zone de fin (`'finish'`).
         *  - Enregistre l’étape courante (`'formationFinish'`) et la formation choisie dans le `sessionStorage`.
         *  - Affiche un message du bot pour introduire la page.
         *  - Affiche la page web correspondant à la formation sélectionnée via `showWebPage`.
         *  - Appelle `finishSite` pour terminer le processus.
         * 
         * @function formationFinish
         * @param {Object} selectedFormation - L’objet représentant la formation choisie (avec `value`, `text`, `lien`).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function formationFinish(selectedFormation)
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepSite', 'formationFinish');
            sessionStorage.setItem('formations', selectedFormation.value);

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Voici la page demandée :", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showWebPage(messageInnerSite, selectedFormation.lien, selectedFormation.text, 'user');
            }, 400);
            setTimeout(() =>
            {
                finishSite();
            }, 550);
        }


        /**
         * Démarre l’étape d’accès aux ressources utiles.
         * 
         * Cette fonction :
         *  - Remplit la liste déroulante avec les options de ressources.
         *  - Affiche la zone de sélection.
         *  - Enregistre l’étape actuelle ('ressources') dans le `sessionStorage`.
         *  - Affiche un message du bot invitant l’utilisateur à choisir une ressource.
         *  - Ajoute un écouteur sur le bouton de validation pour gérer la sélection :
         *      - Récupère la valeur choisie.
         *      - Affiche la ressource sélectionnée dans la conversation.
         *      - Appelle la fonction `resourcesFinish` avec la sélection.
         * 
         * @function resources
         * @returns {void} Cette fonction ne retourne rien.
         */
        function resources()
        {
            remplirListOption('ressource');
            afficherZone('list');

            sessionStorage.setItem('currentStepSite', 'ressources');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Accédez à nos ressources utiles : choisissez une thématique en cliquant sur 'Choisir une thématique...', puis validez", 'bot');
            }, 250);

            validateBtnSite.addEventListener('click', handleRessourcesSubmit, { once: true });
            function handleRessourcesSubmit()
            {
                const selectedValue =       parseInt(jobSelectSite.value);
                const selectedRessource =   listRessource.find(item => item.value === selectedValue);

                if (selectedRessource)
                {
                    showMessageSite(messageInnerSite, selectedRessource.text, 'user');
                    resourcesFinish(selectedRessource);
                }
            }
        }


        /**
         * Conclut l’étape d’accès aux ressources en affichant la page correspondante.
         * 
         * Cette fonction :
         *  - Affiche la zone de fin (`'finish'`).
         *  - Enregistre l’étape courante (`'ressourcesFinish'`) et la ressource sélectionnée dans le `sessionStorage`.
         *  - Affiche un message du bot pour introduire la page.
         *  - Affiche la page web correspondant à la ressource choisie via `showWebPage`.
         *  - Appelle `finishSite` pour terminer le processus.
         * 
         * @function resourcesFinish
         * @param {Object} selectedRessource - L’objet représentant la ressource choisie (avec `value`, `text`, `lien`).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function resourcesFinish(selectedRessource)
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepSite', 'ressourcesFinish');
            sessionStorage.setItem('ressources', selectedRessource.value);

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Voici la page demandée :", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showWebPage(messageInnerSite, selectedRessource.lien, selectedRessource.text, 'user');
            }, 400);
            setTimeout(() =>
            {
                finishSite();
            }, 550);
        }

        
        /**
         * Affiche directement la page de recherche sans étape de sélection.
         * 
         * Cette fonction :
         *  - Affiche la zone de fin (`'finish'`).
         *  - Enregistre l’étape courante (`'recherche'`) dans le `sessionStorage`.
         *  - Affiche un message du bot pour introduire la page.
         *  - Affiche la page web fixe de recherche via `showWebPage`.
         *  - Appelle `finishSite` pour finaliser le processus.
         * 
         * @function recherche
         * @returns {void} Cette fonction ne retourne rien.
         */
        function recherche()
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepSite', 'recherche');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Voici la page demandée :", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showWebPage(messageInnerSite, "https://www.faire-ess.fr/fr/recherche", "page recherche", 'user');
            }, 400);
            setTimeout(() =>
            {
                finishSite();
            }, 550);
        }

        
        /**
         * Affiche directement la page de contact sans étape de sélection.
         * 
         * Cette fonction :
         *  - Affiche la zone de fin (`'finish'`).
         *  - Enregistre l’étape courante (`'contact'`) dans le `sessionStorage`.
         *  - Affiche un message du bot pour introduire la page.
         *  - Affiche la page web fixe de contact via `showWebPage`.
         *  - Appelle `finishSite` pour terminer le processus.
         * 
         * @function contact
         * @returns {void} Cette fonction ne retourne rien.
         */
        function contact()
        {
            afficherZone('finish');
            sessionStorage.setItem('currentStepSite', 'contact');

            setTimeout(() =>
            {
                showMessageSite(messageInnerSite, "Voici la page demandée :", 'bot');
            }, 250);
            setTimeout(() =>
            {
                showWebPage(messageInnerSite, "https://www.faire-ess.fr/fr/contact", "page contacts", 'user');
            }, 400);
            setTimeout(() =>
            {
                finishSite();
            }, 550);
        }


        /**
         * Affiche un message de fin invitant l’utilisateur à réinitialiser le chat.
         * 
         * Cette fonction affiche un message du bot proposant à l’utilisateur de 
         * cliquer sur "Réinitialiser le chat" pour recommencer la conversation depuis le début.
         * 
         * @function finishSite
         * @returns {void} Cette fonction ne retourne rien.
         */
        function finishSite()
        {
            showMessageSite(messageInnerSite, "Encore perdu ? clique sur Réinitialiser le chat pour repartir au début", 'bot');
        }


        /**
         * Gère l’affichage des différentes zones de l’interface selon le type demandé.
         * 
         * Cette fonction :
         *  - Cache toutes les zones (`buttonsZoneSite`, `selectZoneSite`, `finishZoneSite`) et le bouton de validation par défaut.
         *  - Affiche uniquement la zone correspondant au `type` passé en paramètre :
         *      - `'buttons'` : affiche la zone des boutons.
         *      - `'list'` : affiche la zone de sélection déroulante et le bouton de validation.
         *      - `'finish'` : affiche la zone de fin.
         *  - Ne fait rien si le `type` ne correspond à aucun cas prévu.
         * 
         * @function afficherZone
         * @param {string} type - Le type de zone à afficher (`'buttons'`, `'list'` ou `'finish'`).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function afficherZone(type)
        {
            buttonsZoneSite.style.display =         'none';
            selectZoneSite.style.display =          'none';
            finishZoneSite.style.display =          'none';

            validateBtnSite.style.display =         'none';
            
            if (type === 'buttons')
            {
                buttonsZoneSite.style.display =     'block';
            }
            else if (type === 'list')
            {
                selectZoneSite.style.display =      'block';
                validateBtnSite.style.display =     'block';
            }
            else if (type == 'finish')
            {
                finishZoneSite.style.display =      'block';
            }
            else
            {
                return;
            }
        }


        /**
         * Remplit la liste déroulante avec les options correspondant à une catégorie donnée.
         * 
         * Cette fonction :
         *  - Vide toutes les options existantes dans le sélecteur `jobSelectSite`.
         *  - Détermine la liste des options à afficher en fonction de la catégorie passée en paramètre.
         *  - Ajoute une option par défaut désactivée et sélectionnée invitant à choisir une thématique.
         *  - Si la catégorie est vide, la fonction s’arrête sans ajouter d’autres options.
         *  - Sinon, ajoute toutes les options issues de la liste correspondant à la catégorie, avec leur valeur et texte.
         * 
         * @function remplirListOption
         * @param {string} categorie - La catégorie d’options à afficher (ex : `'thematique'`, `'identité'`, `'inclusif'`, `'etablissement'`, `'formations'`, `'ressource'`).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function remplirListOption(categorie)
        {
            for (let i = jobSelectSite.options.length; i >= 0; i--)
            {
                jobSelectSite.remove(i);
            }
            
            const liste =
            {
                'thematique': listThematiques,
                'identité': listIdentité,
                'inclusif': listInclusif,
                'etablissement': listEtablissement,
                'formations': listeSiteFormations,
                'ressource': listRessource
            };
            const data = liste[categorie];
            const option = document.createElement('option');

            option.value =          0;
            option.textContent =    "Choisir une thématique...";
            option.disabled =       true;
            option.selected =       true;
            jobSelectSite.appendChild(option);

            if(categorie === '')
            {
                return;
            }
            
            data.forEach(item =>
            {
                const option =          document.createElement('option');
                option.value =          item.value;
                option.textContent =    item.text;
                jobSelectSite.appendChild(option);
            });
        }


        /**
         * Affiche un message dans la zone de chat et gère l’historique des messages.
         * 
         * Cette fonction :
         *  - Vérifie si le message a déjà été affiché pour éviter les doublons (surtout pour les messages du bot).
         *  - Crée un élément `div` avec la classe adaptée selon l’expéditeur (`user` ou `bot`).
         *  - Insère le message dans le conteneur fourni.
         *  - Sauvegarde le message dans la session si `saveHistory` est vrai (par défaut).
         *  - Fait défiler la zone de chat vers le bas pour afficher le nouveau message.
         * 
         * @function showMessageSite
         * @param {HTMLElement} container - L’élément DOM dans lequel afficher le message.
         * @param {string} message - Le texte du message à afficher.
         * @param {string} sender - L’expéditeur du message, `'user'` ou `'bot'`.
         * @param {boolean} [saveHistory=true] - Indique si le message doit être sauvegardé dans l’historique.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function showMessageSite(container, message, sender, saveHistory = true)
        {
            const messageExists = chatHistorySite.some(chat => chat.content === message && chat.sender === sender);
            if (sender === 'bot' && container.innerHTML.includes(message) || messageExists)
            {
                return;
            }

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('uk-chat-message-site-chatbot');
            
            if (sender === 'user')
            {
                messageDiv.classList.add('uk-user-message-site-chatbot');
            }
            else
            {
                messageDiv.classList.add('uk-bot-message-site-chatbot');
            }

            messageDiv.textContent = message;
            container.appendChild(messageDiv);

            if (saveHistory)
            {
                saveMessageToSessionStorageSite(message, false, sender, 'message');
            }

            movement =                      container.scrollHeight
            messageInnerSite.scrollTop =    movement;
        }


        /**
         * Affiche un message dans la zone de chat sans vérifier les doublons ni sauvegarder l’historique.
         * 
         * Cette fonction :
         *  - Crée un élément `div` avec la classe appropriée selon l’expéditeur (`user` ou `bot`).
         *  - Ajoute le message au conteneur fourni.
         *  - Fait défiler la zone de chat vers le bas pour afficher le nouveau message.
         * 
         * @function showMessageSiteHistorique
         * @param {HTMLElement} container - L’élément DOM dans lequel afficher le message.
         * @param {string} message - Le texte du message à afficher.
         * @param {string} sender - L’expéditeur du message, `'user'` ou `'bot'`.
         * @param {boolean} [saveHistory=true] - Paramètre présent mais non utilisé dans cette fonction.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function showMessageSiteHistorique(container, message, sender, saveHistory = true)
        {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('uk-chat-message-site-chatbot');
            
            if (sender === 'user')
            {
                messageDiv.classList.add('uk-user-message-site-chatbot');
            }
            else
            {
                messageDiv.classList.add('uk-bot-message-site-chatbot');
            }
            messageDiv.textContent = message;
            container.appendChild(messageDiv);

            movement = container.scrollHeight
            messageInnerSite.scrollTop = movement;
        }


        /**
         * Affiche un lien cliquable dans la zone de chat et redirige vers la page demandée.
         * 
         * Cette fonction :
         *  - Vérifie si le lien est déjà affiché pour éviter les doublons ou si le lien est vide.
         *  - Crée un élément `<a>` avec le texte et le lien fournis, avec une classe CSS spécifique.
         *  - Ajoute ce lien au conteneur donné.
         *  - Sauvegarde le lien dans l’historique si `saveHistory` est vrai (par défaut).
         *  - Fait défiler la zone de chat vers le bas si elle est visible.
         *  - Redirige immédiatement la fenêtre vers l’URL du lien.
         * 
         * @function showWebPage
         * @param {HTMLElement} container - L’élément DOM dans lequel afficher le lien.
         * @param {string} link - L’URL de la page à afficher.
         * @param {string} text - Le texte à afficher pour le lien.
         * @param {boolean} [saveHistory=true] - Indique si le lien doit être sauvegardé dans l’historique.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function showWebPage(container, link, text, saveHistory = true)
        {
            const messageExists = chatHistorySite.some(chat => chat.content === text && chat.link === link && chat.sender === 'bot');
            if (!link || messageExists)
            {
                return;
            }

            const linkDiv =         document.createElement('a');
            linkDiv.textContent =   text;
            linkDiv.href =          link;
            linkDiv.classList.add('uk-linkDiv-formation-chatbot');

            container.appendChild(linkDiv);

            if (saveHistory)
            {
                saveMessageToSessionStorageSite(text, link, 'bot', 'link');
            }
            
            if (container.style.display === 'block')
            {
                container.scrollTo(
                {
                    top: container.scrollHeight
                });
            }

            window.location.href = link;
        }


        /**
         * Affiche un lien cliquable dans la zone de chat sans redirection automatique ni gestion d’historique.
         * 
         * Cette fonction :
         *  - Vérifie que le lien n’est pas vide.
         *  - Crée un élément `<a>` avec le texte et le lien fournis, et lui applique une classe CSS spécifique.
         *  - Ignore l’ajout si le texte du lien est vide.
         *  - Ajoute le lien au conteneur donné.
         *  - Fait défiler la zone de chat vers le bas si elle est visible.
         * 
         * @function showWebPageHistorique
         * @param {HTMLElement} container - L’élément DOM dans lequel afficher le lien.
         * @param {string} link - L’URL de la page à afficher.
         * @param {string} text - Le texte à afficher pour le lien.
         * @returns {void} Cette fonction ne retourne rien.
         */
        function showWebPageHistorique(container, link, text)
        {
            if (!link)
            {
                return;
            }
            const linkDiv =         document.createElement('a');
            linkDiv.textContent =   text;
            linkDiv.href =          link;
            linkDiv.classList.add('uk-linkDiv-formation-chatbot');
            

            if(linkDiv.innerHTML.trim() === '')
            { 
                return;
            }

            container.appendChild(linkDiv);
            
            if (container.style.display === 'block')
            {
                container.scrollTo(
                { 
                    top: container.scrollHeight 
                });
            }
        }


        /**
         * Sauvegarde un message ou un lien dans l’historique de chat stocké dans la session.
         * 
         * Cette fonction :
         *  - Ajoute un objet représentant le message (texte, lien, expéditeur, type) à la liste `chatHistorySite`.
         *  - Met à jour la clé `'chatHistorySite'` dans `sessionStorage` avec la liste sérialisée.
         * 
         * @function saveMessageToSessionStorageSite
         * @param {string} message - Le contenu textuel du message.
         * @param {string|boolean} [lien=false] - L’URL associée au message, ou `false` s’il n’y en a pas.
         * @param {string} sender - L’expéditeur du message (`'user'` ou `'bot'`).
         * @param {string} type - Le type de contenu (`'message'`, `'link'`, etc.).
         * @returns {void} Cette fonction ne retourne rien.
         */
        function saveMessageToSessionStorageSite(message, lien = false, sender, type)
        {
            chatHistorySite.push(
            {
                type: type,
                content: message,
                link: lien,
                sender: sender
            });
        
            sessionStorage.setItem('chatHistorySite', JSON.stringify(chatHistorySite));
        }


        /**
         * Réinitialise l’interface pour revenir à la page d’accueil du site.
         * 
         * Cette fonction :
         *  - Cache la page du site (`sitePage`).
         *  - Affiche la page d’accueil (`initPage`).
         *  - Vide le contenu des messages affichés dans la conversation (`messageInnerSite`).
         * 
         * @function retourAccueil
         * @returns {void} Cette fonction ne retourne rien.
         */
        backBtnSite.addEventListener('click', retourAccueil);
        function retourAccueil()
        {
            sitePage.style.display =        'none';
            initPage.style.display =        'flex';

            messageInnerSite.innerHTML =    '';
        }


        /**
         * Réinitialise le chat et efface toutes les données de session liées.
         * 
         * Cette fonction :
         *  - Vide la zone d’affichage des messages.
         *  - Supprime toutes les clés liées à l’état et à l’historique du chat dans `sessionStorage`.
         *  - Appelle la fonction `retourAccueil` pour revenir à la page d’accueil.
         * 
         * @function resetChat
         * @returns {void} Cette fonction ne retourne rien.
         */
        resetBtnSite.addEventListener('click', resetChat);
        finishBtnSite.addEventListener('click', resetChat);
        function resetChat()
        {
            messageInnerSite.innerHTML = '';

            sessionStorage.removeItem('currentStepSite');
            sessionStorage.removeItem('chatHistorySite');

            sessionStorage.removeItem('identite');
            sessionStorage.removeItem('inclusif');
            sessionStorage.removeItem('international');
            sessionStorage.removeItem('ressources');
            sessionStorage.removeItem('formations');
            sessionStorage.removeItem('thematique');

            retourAccueil();
        }
    }

    
    /**
     * Lecture automatique des vidéos une fois qu'elles sont prêtes à être lues ("canplay").
     * Pour chaque élément vidéo (initMascotte, popupMascotte, formationMascotte, siteMascotte),
     * on écoute l'événement 'canplay' et on tente de lancer la lecture.
     * Si la lecture est refusée (souvent pour des raisons de politique de navigateur),
     * une erreur est loguée dans la console.
     */
    initMascotte.addEventListener('canplay', () => {
        initMascotte.play().catch(e => console.log('Lecture initMascotte refusé'));
    });
    popupMascotte.addEventListener('canplay', () => {
        popupMascotte.play().catch(e => console.log('Lecteur popupMascotte refusé'))
    })
    formationMascotte.addEventListener('canplay', () => {
        formationMascotte.play().catch(e => console.log('Lecteur popupMascotte refusé'))
    })
    siteMascotte.addEventListener('canplay', () => {
        siteMascotte.play().catch(e => console.log('Lecteur popupMascotte refusé'))
    })
});
            












































/* ▄▄▄       ██▓    ▓█████  ▄████▄   ██▓███   ██▓*/
/*▒████▄    ▓██▒    ▓█   ▀ ▒██▀ ▀█  ▓██░  ██▒▓██▒*/
/*▒██  ▀█▄  ▒██░    ▒███   ▒▓█    ▄ ▓██░ ██▓▒▒██▒*/
/*░██▄▄▄▄██ ▒██░    ▒▓█  ▄ ▒▓▓▄ ▄██▒▒██▄█▓▒ ▒░██░*/
/* ▓█   ▓██▒░██████▒░▒████▒▒ ▓███▀ ░▒██▒ ░  ░░██░*/
/* ▒▒   ▓▒█░░ ▒░▓  ░░░ ▒░ ░░ ░▒ ▒  ░▒▓▒░ ░  ░░▓  */
/*  ▒   ▒▒ ░░ ░ ▒  ░ ░ ░  ░  ░  ▒   ░▒ ░      ▒ ░*/
/*  ░   ▒     ░ ░      ░   ░        ░░        ▒ ░*/
/*      ░  ░    ░  ░   ░  ░░ ░                ░  */
/*                         ░                     */
