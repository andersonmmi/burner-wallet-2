import { BurnerUIComponents } from '@burner-wallet/ui-core';
import QRCode from 'qrcode.react';

import Page from './Page';
import AmountInput from './AmountInput';
import AssetSelector from './AssetSelector';
import Button from './Button';

const components: BurnerUIComponents = {
  Page, AssetSelector, AmountInput, Button,
  QRCode,
}

export default components;
