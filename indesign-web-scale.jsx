﻿var ucmr = app.generalPreferences.useCustomMonitorResolution;if (ucmr){        app.generalPreferences.useCustomMonitorResolution = false;    }else{    app.generalPreferences.customMonitorPpi = 72;    app.generalPreferences.useCustomMonitorResolution = true;}