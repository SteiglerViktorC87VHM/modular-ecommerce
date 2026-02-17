import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('stores') // Ez mondja meg a Dockernek, hogy 'stores' legyen a tábla neve
export class Store {
  @PrimaryGeneratedColumn('uuid') // Automatikus, egyedi azonosító (pl: 550e8400-e29b...)
  id: string;

  @Column({ unique: true }) // A bolt neve (pl: "Pékség")
  name: string;

  @Column({ unique: true }) // Az URL barát név (pl: "pekseg-bolt")
  slug: string;

  @Column({ type: 'jsonb', nullable: true }) // Itt tároljuk majd a Builder látványtervét!
  config: any;

  @CreateDateColumn() // Automatikusan menti a létrehozás idejét
  createdAt: Date;
}
