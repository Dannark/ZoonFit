import GoogleFit, { Scopes } from 'react-native-google-fit'
const moment = require("moment");

export function authorizeGoogleFitAPI(stepCallBack) {
    GoogleFit.checkIsAuthorized()
    .then(() => {
        console.log("Is Logged on GoogleFit? "+GoogleFit.isAuthorized)
        if(GoogleFit.isAuthorized == false){
            const options = {
                scopes: [
                Scopes.FITNESS_ACTIVITY_READ_WRITE,
                Scopes.FITNESS_BODY_READ_WRITE,
                ],
            }

            GoogleFit.authorize(options)
                .then(authResult => {
                if (authResult.success) {
                    //dispatch("AUTH_SUCCESS");
                    console.log("AUTH_SUCCESS")

                    getStepsForPeriod(stepCallBack)
                } else {
                    //dispatch("AUTH_DENIED", authResult.message);
                    console.log("AUTH_DENIED")
                    console.log(authResult.message)
                }
            })
            .catch(() => {
                //dispatch("AUTH_ERROR");
            })
        
        }
        else{
            getStepsForPeriod(stepCallBack)
        }
    })
    
}


export function startRecording(){
    if(GoogleFit.isAuthorized){
        GoogleFit.startRecording((callback) => {
            
        });
    }
}

export function getStepsForPeriod(stepCallBack){
    let totalStep = 0

    const options = {
        startDate: "2020-01-01T00:00:17.971Z", // required ISO8601Timestamp
        endDate: new Date().toISOString() // required ISO8601Timestamp
    };
    
    GoogleFit.getDailyStepCountSamples(options)
        .then((res) => {
        
        res.map((item,index) => {
            if(item.steps.length != 0){
                
                item.steps.map((step, i) => {
                    if(step.date == moment().format('YYYY-MM-DD')){
                        console.log("Today Steps: "+step.value + " on "+step.date)
                        totalStep += step.value
                    }
                })
            }
        })
        stepCallBack(totalStep)
    })
    .catch((err) => {console.warn(err)})

    return totalStep
}


export function saveStepOnToday(totalSteps, dispatch){
    
    if(now != undefined){
        const newDay = {
            day:`${now[0]}`, 
            month:`${now[1]}`, 
            year:`${now[2]}`,
            steps: `${totalSteps}`
        }
        dispatch({type: 'ADD_OR_REPLACE_DAY', newDay})
    }
}

const now = [moment().format('DD'), moment().format('MMM'), moment().format('YYYY')]