import GoogleFit, { Scopes } from 'react-native-google-fit'

export function authorize() {
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

                getStepsForPeriod()
            } else {
                //dispatch("AUTH_DENIED", authResult.message);
                console.log("AUTH_DENIED")
                console.log(authResult.message)
            }
            })
            .catch(() => {
            dispatch("AUTH_ERROR");
            })
        
        }
        else{
            getStepsForPeriod()
        }
    })
    
}


export function startRecording(){
    console.log("startRecording")
    if(GoogleFit.isAuthorized){
        GoogleFit.startRecording((callback) => {
            console.log("recoding...")
        });
    }
}

export function getStepsForPeriod(){
    console.log("getStepsForPeriod")

    const options = {
        startDate: "2020-01-01T00:00:17.971Z", // required ISO8601Timestamp
        endDate: new Date().toISOString() // required ISO8601Timestamp
    };
    
    GoogleFit.getDailyStepCountSamples(options)
    .then((res) => {
        console.log('Daily steps >>> ', res)
    })
    .catch((err) => {console.warn(err)})
}