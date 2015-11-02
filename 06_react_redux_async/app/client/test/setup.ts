import { jsdom } from 'jsdom';


(<any>global).document = jsdom('<!doctype html><html><body></body></html>');
(<any>global).window = document.defaultView;
(<any>global).navigator = window.navigator;


