import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid';

// Entidade Do Banco De Dados


@Entity("pois")
class POIS {
   @PrimaryColumn()
   id?: string

   @Column()
   name: string

   @Column()
   y: number

   @Column()
   x: number

   @CreateDateColumn()
   created_at: Date

   constructor(){
      if(!this.id){
         this.id = uuidv4()
      }
   }
}

export {POIS}