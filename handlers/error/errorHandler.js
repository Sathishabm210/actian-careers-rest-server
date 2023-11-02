class NotFoundError extends Error {
    constructor(message = 'Resource not found') {
      super(message);
      this.name = 'NotFoundError';
      this.statusCode = 404;
      this.message = message;
    }
  }
  
  class ValidationError extends Error {
    constructor(message = 'Validation error') {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = 400;
      this.message = message;
    }
  }
  
  // Export the custom error classes
  module.exports = { NotFoundError, ValidationError };
  