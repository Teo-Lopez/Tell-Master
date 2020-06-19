import React, { useEffect } from "react";
import { FlowChartWithState } from "@mrblenny/react-flow-chart";

function GameFlowChart() {
  const infoChart = { offset: { x: 0, y: 0 }, nodes: {}, links: {}, selected: {}, hovered: {} };

  const game = {
    chapters: [
      {
        choices: [
          {
            trial: {
              difficulty: 12,
              characteristic: "wis",
            },
            _id: "5ee78d507cafcc6ff67a26b5",
            description: "Es una trampa! Nadie regala cocretas",
            pxGranted: 20,
            successTargetChapter: "5eeb5282c9e649469cc02f57",
            failureTargetChapter: "5ee78dae7cafcc6ff67a26b9",
            createdAt: "2020-06-15T15:01:36.817Z",
            updatedAt: "2020-06-18T14:17:56.992Z",
            __v: 0,
          },
        ],
        _id: "5ee78d527cafcc6ff67a26b6",
        description:
          "<p>La Encarni sale a recibirte con un grueso y sucio delantal.&nbsp;</p><p>Te dice:</p><p><strong>&nbsp;- Pasa, pasa, que he hecho cocretas!</strong></p>",
        createdAt: "2020-06-15T15:01:38.268Z",
        updatedAt: "2020-06-19T09:05:54.671Z",
        __v: 0,
      },
      {
        choices: [
          {
            trial: {
              difficulty: 15,
              characteristic: "agi",
            },
            _id: "5ee78d947cafcc6ff67a26b7",
            description: "Sal echando leches",
            pxGranted: 40,
            createdAt: "2020-06-15T15:02:44.525Z",
            updatedAt: "2020-06-15T15:02:44.525Z",
            __v: 0,
          },
          {
            trial: {
              difficulty: 20,
              characteristic: "str",
            },
            _id: "5ee78daa7cafcc6ff67a26b8",
            description: "Vence a la tia en un combate de judo",
            pxGranted: 100,
            createdAt: "2020-06-15T15:03:06.701Z",
            updatedAt: "2020-06-18T15:01:31.879Z",
            __v: 0,
            failureTargetChapter: null,
            successTargetChapter: "5eeb5355c9e649469cc02f59",
          },
        ],
        _id: "5ee78dae7cafcc6ff67a26b9",
        description: "La cagaste burlancaster, no te diste cuenta de que era una trampa!",
        createdAt: "2020-06-15T15:03:10.168Z",
        updatedAt: "2020-06-18T15:01:35.968Z",
        __v: 0,
      },
      {
        choices: [
          {
            trial: {
              difficulty: 15,
              characteristic: "agi",
            },
            _id: "5eeb6296d575fb5b166a5a5d",
            description: "Salgo corriendo por la puerta",
            pxGranted: 100,
            createdAt: "2020-06-18T12:48:22.885Z",
            updatedAt: "2020-06-18T12:48:22.885Z",
            __v: 0,
          },
        ],
        _id: "5eeb5282c9e649469cc02f57",
        description: "Te diste cuenta a tiempo. ¡Eran croquetas bomba! Ahora parece que la tía Herminia está buscando algo en un cajón",
        createdAt: "2020-06-18T11:39:46.349Z",
        updatedAt: "2020-06-18T12:48:26.865Z",
        __v: 0,
      },
      {
        choices: [
          {
            trial: {
              difficulty: 16,
              characteristic: "des",
            },
            _id: "5eeb81390147d80017ba979f",
            description: "Robo una moto y me las piro de aquí",
            pxGranted: 20,
            createdAt: "2020-06-18T14:59:05.064Z",
            updatedAt: "2020-06-18T14:59:05.064Z",
            __v: 0,
          },
          {
            trial: {
              difficulty: 8,
              characteristic: "des",
            },
            _id: "5eeb814b0147d80017ba97a0",
            description: "Robo un patinete y me las piro de aquí",
            pxGranted: 0,
            createdAt: "2020-06-18T14:59:23.048Z",
            updatedAt: "2020-06-18T14:59:23.048Z",
            __v: 0,
          },
        ],
        _id: "5eeb5355c9e649469cc02f59",
        description: "Tus habilidades judokas acabaron con tu tia. Pero ahora la policia te persigue.",
        createdAt: "2020-06-18T11:43:17.400Z",
        updatedAt: "2020-06-18T14:59:31.921Z",
        __v: 0,
      },
      {
        choices: [],
        _id: "5eeb5370c9e649469cc02f5b",
        description: "No eres bastante rápido escapando. Estás muerto",
        createdAt: "2020-06-18T11:43:44.214Z",
        updatedAt: "2020-06-18T17:15:05.506Z",
        __v: 0,
      },
      {
        choices: [],
        _id: "5eeba171ceae463c79f4b051",
        description: "Nuevo cap",
        createdAt: "2020-06-18T17:16:33.641Z",
        updatedAt: "2020-06-18T17:16:33.641Z",
        __v: 0,
      },
    ],
    _id: "5ee782d3be81f5578be85b00",
    creator: "5ee7829ebe81f5578be85aff",
    title: "La casa de la Encarni",
    minLevel: 1,
    description:
      "En la casa de la Encarni están sucendiendo cosas telibles. Las cocretas se dan la vuelta solas y el pescado sabe rico. ¿Averiguarás el misterio?",
    createdAt: "2020-06-15T14:16:51.406Z",
    updatedAt: "2020-06-18T17:23:31.155Z",
    __v: 0,
  };

  useEffect(() => {
    function generateNode(mainObj, chapter, posX, posY) {
      const chapNode = {
        id: chapter._id,
        type: "input-output",
        position: {
          x: posX,
          y: posY,
        },
        ports: {},
      };

      const nodes = mainObj.nodes;
      chapter.choices.forEach((choice) => {
        chapNode.ports[choice._id] = {
          id: choice._id,
          type: "output",
          properties: {
            value: "yes",
          },
        };
        mainObj.nodes[choice._id] = chapNode;
        console.log("2", nodes);

        //genera links en mainObj
        if (choice.successTargetChapter) {
          //generar links
          mainObj.links[choice.successTargetChapter] = {
            id: choice.successTargetChapter,
            from: {
              nodeId: chapter._id,
              portId: chapter._id,
            },
            to: {
              nodeId: choice.successTargetChapter,
              portId: chapter._id,
            },
          };

          if (!mainObj.nodes[choice.successTargetChapter]) {
            mainObj.nodes[choice.successTargetChapter] = {
              ports: {},
            };
          }
          mainObj.nodes[choice.successTargetChapter].ports[chapter._id] = { id: chapter._id, type: "input" };
        }

        console.log("3", mainObj);

        if (choice.failureTargetChapter) {
          mainObj.links[choice.failureTargetChapter] = {
            id: choice.failureTargetChapter,
            from: {
              nodeId: chapter._id,
              portId: chapter._id,
            },
            to: {
              nodeId: choice.failureTargetChapter,
              portId: chapter._id,
            },
          };

          console.log("4", nodes);

          if (!mainObj.nodes[choice.failureTargetChapter]) {
            mainObj.nodes[choice.failureTargetChapter] = {
              ports: {},
              links: {},
            };
          }
          console.log("5", nodes);

          if (!mainObj.nodes[choice.failureTargetChapter].ports[chapter._id]) {
            mainObj.nodes[choice.failureTargetChapter].ports[chapter._id] = { id: chapter._id, type: "input" };
          }
        }
      });

      console.log(nodes);
      for (let key in nodes) {
        if (nodes[key].position == undefined) nodes[key].position = { x: 600, y: 600 };
      }
      //////////////////////////////
    }

    game.chapters.forEach((chap, idx) => {
      generateNode(infoChart, chap, 0, (idx + 1) * 300);
    });

    console.log(infoChart, "FINAL");
  }, []);

  //////////////////////////////
  return <FlowChartWithState initialValue={infoChart} />;
}

export default GameFlowChart;
