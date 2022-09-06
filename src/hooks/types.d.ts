interface IFormFieldObj {
    [props: string]: string | nummber;
}

interface IRules {
    [props: string]: string;
}

interface IErrors {
    [props: string]: string;
}

interface IToast {
    type: 'error' | 'warning' | 'success';
    message: string;
}
