/**
 * Created by DEV10 on 2015/11/12.
 */
var log4js = require('log4js');

log4js.configure('./config/log4js.json');


console.log("log_start start!");
var log_console = log4js.getLogger("console");
log_console.trace('console trace........');
log_console.debug('console debug........');
log_console.info('console info........');
log_console.warn('console warn........');
log_console.error('console error........');
log_console.fatal('console fatal........');

var log_trace = log4js.getLogger("log_trace");
log_trace.trace('log_trace trace........');
log_trace.debug('log_trace debug........');
log_trace.info('log_trace info........');
log_trace.warn('log_trace warn........');
log_trace.error('log_trace error........');
log_trace.fatal('log_trace fatal........');

var log_info = log4js.getLogger("log_info");
log_info.trace('log_info trace........');
log_info.debug('log_info debug........');
log_info.info('log_info info........');
log_info.warn('log_info warn........');
log_info.error('log_info error........');
log_info.fatal('log_info fatal........');

var log_stat = log4js.getLogger("log_stat");
log_stat.trace('log_stat trace........');
log_stat.debug('log_stat debug........');
log_stat.info('log_stat info........');
log_stat.warn('log_stat warn........');
log_stat.error('log_stat error........');
log_stat.fatal('log_stat fatal........');

var log_error = log4js.getLogger("log_error");
log_error.trace('log_error trace........');
log_error.debug('log_error debug........');
log_error.info('log_error info........');
log_error.warn('log_error warn........');
log_error.error('log_error error........');
log_error.fatal('log_error fatal........');

var log_todo = log4js.getLogger("log_todo");
log_todo.trace('log_todo trace........');
log_todo.debug('log_todo debug........');
log_todo.info('log_todo info........');
log_todo.warn('log_todo warn........');
log_todo.error('log_todo error........');
log_todo.fatal('log_todo fatal........');

console.log("log_start end!");