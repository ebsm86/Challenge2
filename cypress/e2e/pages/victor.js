const gogo = {
    AM18: [
      {
        type: "exist",
        name: "Existencia de ajustes de precios",
        blocking: true,
        config: {
          column: "am18_adjind",
          value: "1"
        }
      },
      {
        type: "exist",
        name: "Existencia de ajustes de fletes",
        blocking: true,
        config: {
          column: "am18_adjind",
          value: "2"
        }
      },
      {
        type: "row",
        name: "Ajustes con descuento elevado",
        blocking: false,
        config: {
          id: [
            "am18_adjlst",
            "am18_adjsublst",
            "am18_adjsclnum"
          ],
          conditions: "am18_adjind = '1' AND am18_adjratpct::FLOAT <= -76",
          removeInvalidRows: false
        }
      },
      {
        type: "row",
        name: "Ajustes con descuento fuera de rango",
        blocking: false,
        config: {
          id: [
            "am18_adjlst",
            "am18_adjsublst",
            "am18_adjsclnum"
          ],
          conditions: "am18_adjind = '1' AND am18_adjratpct::FLOAT NOT BETWEEN -100 AND 0",
          removeInvalidRows: true
        }
      }
    ],
    TPLANES: [
      {
        type: "row",
        name: "Planes con descuento elevado",
        blocking: false,
        config: {
          id: [
            "idplan"
          ],
          conditions: "topdes::FLOAT >= 52",
          removeInvalidRows: false
        }
      },
      {
        type: "row",
        name: "Planes con descuento fuera de rango",
        blocking: false,
        config: {
          id: [
            "idplan"
          ],
          conditions: "topdes::FLOAT NOT BETWEEN 0 AND 100",
          removeInvalidRows: true
        }
      }
    ],
    BENEFICI: [
      {
        type: "row",
        name: "Beneficios con descuento elevado",
        blocking: false,
        config: {
          id: [
            "cbene"
          ],
          conditions: "porben::FLOAT >= 21",
          removeInvalidRows: false
        }
      },
      {
        type: "row",
        name: "Beneficios con descuento fuera de rango",
        blocking: false,
        config: {
          id: [
            "cbene"
          ],
          conditions: "porben::FLOAT NOT BETWEEN 0 AND 100",
          removeInvalidRows: true
        }
      }
    ],
    AM01: [
      {
        type: "row",
        name: "Productos sin IVA",
        blocking: false,
        config: {
          id: [
            "am01_artnum"
          ],
          conditions: "am01_arttyp = '1' AND am01_arttaxcod5 != '1'",
          removeInvalidRows: true
        }
      }
    ],
  };
  
  console.log(JSON.stringify(gogo).replaceAll('\'', '\\\''));
  //console.log(JSON.stringify(gogo).replaceAll('\'', '\'\''));
  Contraer
  
  
  
  
  
  
  
  
  
  
  