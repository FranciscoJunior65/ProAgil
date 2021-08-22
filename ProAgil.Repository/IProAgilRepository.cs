using System;
using System.Security.AccessControl;
using System.Threading.Tasks;
{
    
}
namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        //EVENTOS
        Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrantes);
        Task<Evento[]> GetAllEventoAsync(bool includePalestrantes);
        Task<Evento[]> GetAllEventoAsyncById(int EventoId, bool includePalestrantes);

        //Palestrante
        Task<Evento[]> GetAllPalestranteAsyncByName(bool includePalestrantes);
        Task<Evento[]> GetAllPalestranteAsyncById(int PalestranteId, bool includePalestrantes);
    }
}