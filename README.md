# Enver
Super minimalistic pre-processor por env vars.

Simply checks if the var is there and then parses it to a string, or a number (or return default).

## Usage
```typescript
import { Enver } from '@siendoricardo/enver';

// This will throw an error if the var is not set
Enver.getBoolean('VAR_NOT_EXISTS');

// This won't throw because the default value is returned
Enver.getBoolean('VAR_NOT_EXISTS', true);


// All available methods
Enver.get('MY_VAR'); // This return unkown
Enver.getString('MY_VAR', 'optional default value'); 
Enver.getNumber('MY_VAR');
Enver.getBoolean('MY_VAR');

```

