import * as React from 'react';

/**
 * Dependencies
 */
import ReCAPTCHA from 'react-google-recaptcha';

interface IProps {
  onChange: (token: string | null) => void;
  onErrored: () => void;
  onExpired: () => void;
}

const RecaptchaContainer: React.FC<IProps> = (props) => {
  return (
    <ReCAPTCHA
      theme="light"
      onChange={props.onChange}
      onErrored={props.onErrored}
      onExpired={props.onExpired}
      sitekey="6LdkSOYUAAAAAMyFuHJOV92zk9JhSX6ZyT4HZMjw"
    />
  );
};

export default RecaptchaContainer;
