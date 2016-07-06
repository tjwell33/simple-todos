/**
 * Created by jietian on 16/7/5.
 */

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});