import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
    
    private readonly http: AxiosAdapter
    ){}

  async executeSeed(){

    await this.pokemonModel.deleteMany(); //! ELIMINA TODOS LOS DOCUMENTOS

    const data  = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=100000')
    
    const pokemonToInsert: { name: string, no: number}[] = [];


    data.results.forEach( async( { name, url })=> {

      const segments = url.split('/');
      //console.log(segments);

      const no:number = Number(segments[ segments.length - 2 ]);
      //console.log({ name, no });
      //await this.pokemonModel.create({ no, name  });
      pokemonToInsert.push({name,no});

    })
    
    await this.pokemonModel.insertMany(pokemonToInsert);
    
    return 'Data rellenada';
  }



}
