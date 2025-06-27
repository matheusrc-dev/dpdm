Uso do banco de dados SQLite no expo e uma versão minimalista do pattern repository, que favorece a centralização das responsabilidades de acessos ao banco em classes específicas.

Via de regra utilizamos o sqlite que funciona tanto no ios quanto no android.

Existe uma implementacao do sqlite no framework expo. Chamada de Expo SQLite.

Criamos uma caamda para abstrair a complexidade do sqlite.



Documentação expo sqlite:
https://docs.expo.dev/versions/latest/sdk/sqlite/

