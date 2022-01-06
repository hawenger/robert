import { Interface } from "readline";
import { DuoSynth, Envelope } from "tone";

export class UserBuilder {
  private name: string;
  private age: number;
  private phone: string;
  private address: string;

  constructor(name: string) {
    this.name = name;
  }

  get Name() {
    return this.name;
  }
  setAge(value: number): UserBuilder {
    this.age = value;
    return this;
  }
  get Age() {
    return this.age;
  }
  setPhone(value: string): UserBuilder {
    this.phone = value;
    return this;
  }
  get Phone() {
    return this.phone;
  }
  setAddress(value: string): UserBuilder {
    this.address = value;
    return this;
  }
  get Address() {
    return this.address;
  }

  build(): User {
    return new User(this);
  }
}

export class User {
  private name: string;
  private age: number;
  private phone: string;
  private address: string;

  constructor(builder: UserBuilder) {
    this.name = builder.Name;
    this.age = builder.Age;
    this.phone = builder.Phone;
    this.address = builder.Address;
  }

  get Name() {
    return this.name;
  }
  get Age() {
    return this.age;
  }
  get Phone() {
    return this.phone;
  }
  get Address() {
    return this.address;
  }
}

//export class DuoSynthBuilder {
//  private: vibratoAmount : number;// 0.5 ;
//  vibratoRate : //5 ,
//  harmonicity : //1.5 ,
//  voice0 : {
//  volume : -10 ,
//  portamento : 0 ,
//  oscillator : {
//  type : sine
//  } ,
//  filterEnvelope : {
//  attack : 0.01 ,
//  decay : 0 ,
//  sustain : 1 ,
//  release : 0.5
//  } ,
//  envelope : {
//  attack : 0.01 ,
//  decay : 0 ,
//  sustain : 1 ,
//  release : 0.5
//  }
//  } ,

//  }

export interface Oscillator {
  oscillator: { type: string };
}
export interface Voice {
  volume: number;
  portamento: number;
  oscillator: Oscillator;
  filterEnvelope: Envelope;
  envelope: Envelope;
}
export interface Envelope {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

export interface DuoSynth {
  vibratoAmount: number;
  vibratoRate: number;
  harmonicity: number;
  voice0: Voice;
  voice1: Voice;
}
const defaultOscillator: Oscillator = {
  oscillator: { type: "sine" },
};
const defaultEnvelope: Envelope = {
  attack: 0.01,
  decay: 0,
  sustain: 1,
  release: 0.5,
};
const defaultVoice: Voice = {
  volume: -10,
  portamento: 0,
  oscillator: defaultOscillator,
  filterEnvelope: defaultEnvelope,
  envelope: defaultEnvelope,
};

class DuoSynthBuilder {
  private readonly duoSynth: DuoSynth;

  constructor() {
    this.duoSynth = {
      vibratoAmount: 0,
      vibratoRate: 0,
      harmonicity: 0,
      voice0: defaultVoice,
      voice1: defaultVoice,
    };
  }

  vibratoAmount(vibratoAmount: number): DuoSynthBuilder {
    this.duoSynth.vibratoAmount = vibratoAmount;
    return this;
  }

  vibratoRate(vibratoRate: number): DuoSynthBuilder {
    this.duoSynth.vibratoRate = vibratoRate;
    return this;
  }

  harmonicity(harmonicity: number): DuoSynthBuilder {
    this.duoSynth.harmonicity = harmonicity;
    return this;
  }
  //voice0(harmonicity: number): DuoSynthBuilder {
  //  this.duoSynth.harmonicity = harmonicity;
  //  return this;
  //}
  //voice1(harmonicity: number): DuoSynthBuilder {
  //  this.duoSynth.harmonicity = harmonicity;
  //  return this;
  //}

  build(): DuoSynth {
    return this.duoSynth;
  }
}
class OscillatorBuilder {}

class VoiceBuilder {
  private readonly voice: Voice;

  constructor() {
    this.voice = {
      volume: -10,
      portamento: 2,
      oscillator: defaultOscillator,
      envelope: defaultEnvelope,
      filterEnvelope: defaultEnvelope,
    };
  }

  volume(volume: number): VoiceBuilder {
    this.voice.volume = volume;
    return this;
  }
  portamento(portamento: number): VoiceBuilder {
    this.voice.portamento = portamento;
    return this;
  }
}

class EnvelopeBuilder {
  private readonly envelope: Envelope;

  constructor() {
    this.envelope = {
      attack: 0,
      decay: 0,
      sustain: 0,
      release: 0,
    };
  }
  attack(attack: number): EnvelopeBuilder {
    this.envelope.attack = attack;
    return this;
  }

  decay(decay: number): EnvelopeBuilder {
    this.envelope.decay = decay;
    return this;
  }

  sustain(sustain: number): EnvelopeBuilder {
    this.envelope.sustain = sustain;
    return this;
  }
  release(release: number): EnvelopeBuilder {
    this.envelope.release = release;
    return this;
  }

  build(): Envelope {
    return this.envelope;
  }
}

interface Builder {
  setPOM(): void;
  setPOMObjects(): void;
  addStep(): void;
}

class TestBuilder implements Builder {
  private test: Test;
  constructor() {
    this.reset();
  }
  public reset(): void {
    this.test = new Test();
  }
  public setPOM(): void {
    this.test.parts.push("Set Pom");
  }
  public setPOMObjects(): void {
    this.test.parts.push("Set POM Objects");
  }
  public addStep(): void {
    this.test.steps.push({ name: "hello" });
  }
  public getTest(): Test {
    const result = this.test;
    this.reset();
    return result;
  }
}

class Test {
  public parts: string[] = [];
  public steps: object[] = [];
  //public parts: object = {};

  public listParts(): void {
    console.log(`Test parts: ${this.parts.join(",")}\n`);
  }
  public listSteps(): void {
    console.log(JSON.stringify(`${this.steps}`));
  }
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildNewTest(): void {
    this.builder.setPOM();
    this.builder.setPOMObjects();
    this.builder.addStep();
  }
}

function testController(director: Director) {
  const builder = new TestBuilder();
  director.setBuilder(builder);
  const builder2 = new TestBuilder();
  builder2.addStep();
  builder2.addStep();
  builder2.addStep();
  builder2.addStep();
  builder2.addStep();
  builder2.addStep();
  builder2.getTest().listSteps();
  //director.buildNewTest();
  //builder.getTest().listParts();
} //

const director = new Director();
testController(director);
