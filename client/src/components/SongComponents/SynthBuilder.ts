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

interface DuoSynth {
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
