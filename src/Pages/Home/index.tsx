import { Grid, Typography } from "@mui/material"
import Card from "../../components/Feedback/Card/Card";
import { lista } from "./data";
import { useState } from "react";
import Modal from "../../components/Utils/Modal/Modal";
import type { DicionarioItem } from "./type";

function DicionarioJS() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DicionarioItem | null>(null);
  const [filter, setFilter] = useState('');

  const handleOpenModal = (item: DicionarioItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <>
      <Grid container sx={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} spacing={3}>
        <Typography variant="h4" sx={{ marginBottom: '1rem' }}>Dicionário de JavaScript</Typography>
        <search>
          <input
            type="text"
            placeholder="Procurar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ borderRadius: '25px', padding: '0.5rem', width: '100%'}} />
        </search>

        <Grid sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <button value="" onClick={() => setFilter('')} style={{backgroundColor: '#322ffdff', borderRadius: '25px', padding: '0.5rem', color: '#fff', cursor: 'pointer'}}>
            <Typography variant="body1">Todos</Typography>
          </button>
          <button value="básico" onClick={() => setFilter('básico')} style={{backgroundColor: '#322ffdff', borderRadius: '25px', padding: '0.5rem', color: '#fff', cursor: 'pointer'}}>
            <Typography variant="body1">Básico</Typography>
          </button>
          <button value="médio" onClick={() => setFilter('médio')} style={{backgroundColor: '#322ffdff', borderRadius: '25px', padding: '0.5rem', color: '#fff', cursor: 'pointer'}}>
            <Typography variant="body1">Médio</Typography>
          </button>
          <button value="avançado" onClick={() => setFilter('avançado')} style={{backgroundColor: '#322ffdff', borderRadius: '25px', padding: '0.5rem', color: '#fff', cursor: 'pointer'}}>
            <Typography variant="body1">Avançado</Typography>
          </button>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: '1rem', width: '100%', margin: 'auto' }} spacing={5}>
        {lista.map((item, index) => {
          if (search && item.termo.toLowerCase().indexOf(search.toLowerCase()) === -1) {
            return null;
          }
          if (filter && item.type.toLowerCase() !== filter.toLowerCase()) {
            return null;
          }
          return (
            <Card
              icon={item.icon}
              key={index}
              title={item.termo}
              type={item.definicao}
              mainCode={item.maincode}
              buttonText="Ver mais"
              onClick={() => handleOpenModal(item)}
            />
          )
        })}
        {selectedItem && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title={selectedItem.termo}
            text1={selectedItem.explicação || selectedItem.definicao}
            text2={selectedItem.explicação2}
            code={selectedItem.maincode2}
          />
        )}
      </Grid>
    </>
  )
}

export default DicionarioJS
