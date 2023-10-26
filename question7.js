class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      // Return the password with all characters replaced by asterisks
      return '*'.repeat(this._password.length);
    }
  
    set password(newPassword) {
      // Check if the new password is valid
      if (
        newPassword.length >= 8 &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        this._password = newPassword;
        console.log('Password changed successfully.');
      } else {
        console.error(
          'Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.'
        );
      }
    }
  }
  
  // Usage example:
  const user = new User('john_doe', 'OldP@ssw0rd');
  console.log(`Current password: ${user.password}`);
  user.password = 'NewP@ssw0rd'; // Valid password
  console.log(`Updated password: ${user.password}`);
  
  user.password = 'short';
  