import { Injectable } from '@angular/core';
import { LogEntry } from './pioneer-log';

@Injectable({
  providedIn: 'root'
})
export class PioneerLogsLoggingService {

  constructor() { }

  /**
   *
   * @param message Client defined message
   * @param details Error
   */
  public logUsage(message: string, details: any) {
    const logEntry = this.getTsLoggingInfo(message, details);
    this.logMessage(logEntry, 'Usage');
  }

  /**
   *
   * @param message Client defined message
   * @param details Error
   */
  public logDiagnostic(message: string, details: any) {
    const logEntry = this.getTsLoggingInfo(message, details);
    this.logMessage(logEntry, 'Diagnostic');
  }

  /**
   *
   * @param message Client defined message
   * @param details Error
   */
  public logError(message: string, details: any) {
    const logEntry = this.getTsLoggingInfo(message, details);
    if (details._body) {
      logEntry.CorrelationId = details._body.replace(/.*Error ID: /gi, '');
    }
    this.logMessage(logEntry, 'Error');
  }

  /**
   *
   * @param message Client defined message
   * @param error Error from API
   */
  public handleApiError(message: string, error: any): any {
    this.logError(message, error);
    throw new Error(error._body ? error._body : message);
  }

  private logMessage(logEntry: LogEntry, endpoint: string) {
    // if (!this.securityService.isAuthorized) {
    //     let headers = new Headers();
    //     headers.append("Content-Type", "application/json");
    //     this.http.post("https://loggingapi.knowyourtoolset.com/logging/" + endpoint,
    //         // subscribe is required -- but we don't have to do anything
    //         JSON.stringify(logEntry), {headers:headers}).subscribe();
    //     return;
    // }

    // this.securityService.getUserInfo().subscribe(userInfo => {
    //   logEntry.UserId = userInfo.sub;
    //   logEntry.UserName = userInfo.email;

    //   for (var property in userInfo) {
    //     if (userInfo.hasOwnProperty(property)) {
    //       logEntry.AdditionalInfo[property] = userInfo[property];
    //     }
    //   }

    //   let headers = new Headers();
    //   headers.append("Content-Type", "application/json");
    //   this.http.post("https://loggingapi.knowyourtoolset.com/logging/" + endpoint,
    //     // subscribe is required -- but we don't have to do anything
    //     JSON.stringify(logEntry), { headers: headers }).subscribe();
    // });
  }

  /**
   *
   * @param message Client defined message
   * @param additionalInfo Message
   */
  private getTsLoggingInfo(message: string, additionalInfo: any): LogEntry {
    const logInfo = new LogEntry();
    logInfo.Timestamp = new Date();
    logInfo.Location = window.location.toString();
    logInfo.Product = 'ToDos';
    logInfo.Layer = 'AngularClient';
    logInfo.Message = message;

    logInfo.AdditionalInfo = {};
    if (additionalInfo) {
      for (const property in additionalInfo) {
        if (additionalInfo.hasOwnProperty(property) &&
          property !== 'ngDebugContext' &&
          !(additionalInfo[property] instanceof Function)) {
          logInfo.AdditionalInfo[property] = additionalInfo[property];
        }
      }
    }
    logInfo.AdditionalInfo['user-agent'] = window.navigator.userAgent;

    return logInfo;
  }
}
