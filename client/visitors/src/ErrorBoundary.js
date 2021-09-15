import React ,{useState} from "react";
import {Alert, Button} from 'react-bootstrap';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
     console.error(error + errorInfo);
    }

    
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <AlertDismissibleExample/>;
      }
  
      return this.props.children; 
    }
  }

  function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh Erreur! !</Alert.Heading>
          <p>
            Une erreur ces produite. Veillez raffrechire votre navigateur. Ou reessayer plus tard.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }

  export default ErrorBoundary;