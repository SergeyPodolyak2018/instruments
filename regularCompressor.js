var regular={       
                    var1:{re:/<g id="compressor_x0020_compressor-F([0-9]{1,})-S([0-9]{1,})">/g,     change:'<g class="compressor compressor-F$1-S$2">'},
                    var2:{re:/<g id="receiver_x0020_receiver-F([0-9]{1,})-R([0-9]{1,})">/g,         change:'<g class="receiver receiver-F$1-R$2">'},
                    var3:{re:/<g id="pumpGroup_x0020_pumpGroup-F([0-9]{1,})-P([0-9]{1,})">/g,       change:'<g class="pumpGroup pumpGroup-F$1-P$2">'},
                    var4:{re:/<g id="refrigerator_x0020_refrigerator-F([0-9]{1,})-Rf([0-9]{1,})">/g,change:'<g class="refrigerator refrigerator-F$1-Rf$2">'},
                    var5:{re:/<g class="jar jar-F([0-9]{1,})-J([0-9]{1,})">/g,                      change:'<g class="jar jar-F$1-J$2">'},
                    var6:{re:/id="([A-Z]{1})([0-9]{1,})-([A-Z]{1})([0-9]{1,})-select" class="/g,    change:'class="$1$2-$3$4-select '},
                    var7:{re:/id="status[_]{0,}([0-9]{0,})" class="/g,                              change:'class="status '},                    
                    var8:{re:/id="pressure([0-9]{1,})[_]{0,}([0-9]{0,})" class="/g,                 change:'class="pressure$1 '},                    
                    var9:{re:/id="temperature([0-9]{1,})[_]{0,}([0-9]{0,})" class="/g,              change:'class="temperature$1 '},                    
                    var10:{re:/id="pressureSensor([0-9]{1,})[_]{0,}([0-9]{0,})" class="/g,          change:'class="pressureSensor$1 '},
                    var11:{re:/id="dPressure([0-9]{1,})[_]{0,}([0-9]{0,})" class="/g,               change:'class="dPressure$1 '},
                    var12:{re:/id="level([0-9]{1,})[_]{0,}([0-9]{0,})" class="/g,                   change:'class="level$1 '},
                    var13:{re:/id="LevelSensor([0-9]{1,})[_]{0,}([0-9]{0,})" class="/g,             change:'class="LevelSensor$1 '},
                    var14:{re:/<g id="attention[_]{0,}([0-9]{0,})">/g,                              change:'<g class="attention">'},
                    var15:{re:/<g id="gate[_]{0,}([0-9]{0,})">/g,                                   change:'<g class="gate">'},
                    var16:{re:/<g id="motoGate[_]{0,}([0-9]{0,})">/g,                               change:'<g class="motoGate">'},
                    var17:{re:/id="position([0-9]{0,})[_]{0,}([0-9]{0,})" class="/g,                change:'class="position1 '},
                    var18:{re:/id="F([0-9]{1,})-([a-zA-Z]{1,})([0-9]{1,})-select" class="/g,        change:'class="F$1-$2$3-select '},
                    var19:{re:/<g id="vent[_]{0,}([0-9]{0,})">/g,                                   change:'<g class="vent$1">'},
                    var20:{re:/<g id="hiter[_]{0,}([0-9]{0,})">/g,                                  change:'<g class="hiter$1">'},
                    var21:{re:/<g id="pump([0-9]{1,})[_]{0,}([0-9]{0,})">/g,                        change:'<g class="pump$1">'},
                    var22:{re:/id="auto[_]{0,}([0-9]{0,})" class="/g,                               change:'class="auto '},
                    var23:{re:/id="manual[_]{0,}([0-9]{0,})" class="/g,                             change:'class="manual '},
                    var24:{re:/<g id="Слой_x0020_1">/g,                                             change:'<g id="Слой_x0020_1"><title class="title_very_dificult">:-)</title>'},
                    
   
                };
exports.regular=regular;