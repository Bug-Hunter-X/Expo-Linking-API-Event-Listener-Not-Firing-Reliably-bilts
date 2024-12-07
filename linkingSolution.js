```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleUrl = (url) => {
        setDeepLink(url);
    };
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    getInitialUrl();

    const subscription = Linking.addEventListener('url', handleUrl);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
      if (deepLink !== null) {
          // Handle deep link here
          console.log('Deep link:', deepLink);
      } else if (initialUrl !== null) {
          // Handle initial URL here
          console.log('Initial URL:', initialUrl)
      }
  }, [deepLink, initialUrl]);

  return (
    <View>
      {/* ... rest of your app ... */}
    </View>
  );
}
export default App; 
```