import classNames from 'classnames';

export function getInputClassNames(error) {
    return classNames({
        "border-error": error
    })
}

export function getErrorClassNames(error) {
    return classNames({
        "form-error-alert": true,
        "form-no-error": !error
    })
}
