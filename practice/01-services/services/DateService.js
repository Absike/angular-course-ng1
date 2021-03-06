function DateServiceProvider() {
    // Private fields with default values
    var format = 'LL';

    // Exposed method to configuration phase
    this.setFormat = function (_format) {
        format = _format;
    }

    // Our service
    this.$get = function () {
        function now(userFormat) {
            return moment().format(userFormat || format); // If userFormat is falsy format is returned
        }
        return {
            now: now
        }
    }
}

angular.module('services', [])
    .provider('DateService', DateServiceProvider);